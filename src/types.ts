export type DesignTokens = {
  color: RecursiveRecord;
  font: RecursiveRecord;
  typography: RecursiveRecord;
} & RecursiveRecord;

export type RecursiveRecord = {
  [k: string]: any;
};
