type processManageType = {
  name: string;
  pid?: number;
  mark: string;
  cpu: number;
  memory: number;
  status?: boolean;
  // createdAt: string;
  // updatedAt: string;
  // [key: string]: any;
}
export { processManageType };