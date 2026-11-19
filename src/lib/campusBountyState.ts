export type DemoUserId = "sam" | "olivia";

export type LaundryTaskStatus =
  | "open"
  | "applied"
  | "selected"
  | "funded"
  | "active"
  | "submitted"
  | "completed";

export const demoUsers = {
  sam: {
    id: "sam",
    name: "Sam Huang",
    initials: "SH",
  },
  olivia: {
    id: "olivia",
    name: "Olivia Parker",
    initials: "OP",
  },
};

const USER_KEY = "campusBountyUser";
const TASK_KEY = "laundryTaskStatus";
const ESCROW_TASK_ID_KEY = "laundryEscrowTaskId";
const ESCROW_REQUESTER_KEY = "laundryEscrowRequester";

export function getCurrentUser(): DemoUserId | null {
  if (typeof window === "undefined") return null;

  const user = localStorage.getItem(USER_KEY);

  if (user === "sam" || user === "olivia") {
    return user;
  }

  return null;
}

export function loginAs(user: DemoUserId) {
  localStorage.setItem(USER_KEY, user);
}

export function logout() {
  localStorage.removeItem(USER_KEY);
}

export function getLaundryTaskStatus(): LaundryTaskStatus {
  if (typeof window === "undefined") return "open";

  const status = localStorage.getItem(TASK_KEY);

  const validStatuses: LaundryTaskStatus[] = [
    "open",
    "applied",
    "selected",
    "funded",
    "active",
    "submitted",
    "completed",
  ];

  if (validStatuses.includes(status as LaundryTaskStatus)) {
    return status as LaundryTaskStatus;
  }

  return "open";
}

export function setLaundryTaskStatus(status: LaundryTaskStatus) {
  localStorage.setItem(TASK_KEY, status);
}

export function getEscrowTaskId(): bigint | null {
  if (typeof window === "undefined") return null;

  const storedTaskId = localStorage.getItem(ESCROW_TASK_ID_KEY);

  if (!storedTaskId) return null;

  try {
    return BigInt(storedTaskId);
  } catch {
    return null;
  }
}

export function createEscrowTaskId(): bigint {
  const bytes = crypto.getRandomValues(new Uint8Array(8));
  const taskId = new DataView(bytes.buffer).getBigUint64(0, true);

  localStorage.setItem(ESCROW_TASK_ID_KEY, taskId.toString());
  return taskId;
}

export function setEscrowRequester(walletAddress: string) {
  localStorage.setItem(ESCROW_REQUESTER_KEY, walletAddress);
}

export function getEscrowRequester(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(ESCROW_REQUESTER_KEY);
}

export function resetDemo() {
  localStorage.removeItem(USER_KEY);
  localStorage.setItem(TASK_KEY, "open");
  localStorage.removeItem(ESCROW_TASK_ID_KEY);
  localStorage.removeItem(ESCROW_REQUESTER_KEY);
}
