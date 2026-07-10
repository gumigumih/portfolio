interface DateInfo {
  year: number;
  month: number;
}

export const formatProjectPeriod = (startDate: DateInfo, endDate: DateInfo, isOngoing = false): string => {
  const endLabel = isOngoing ? '現在' : `${endDate.year}年${endDate.month}月`;
  return `${startDate.year}年${startDate.month}月 〜 ${endLabel}`;
};

export const formatYearMonth = (date: DateInfo): string => {
  return `${date.year}年${date.month}月`;
};
