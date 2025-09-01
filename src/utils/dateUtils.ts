interface DateInfo {
  year: number;
  month: number;
}

export const formatProjectPeriod = (startDate: DateInfo, endDate: DateInfo): string => {
  return `${startDate.year}年${startDate.month}月 〜 ${endDate.year}年${endDate.month}月`;
};

export const formatYearMonth = (date: DateInfo): string => {
  return `${date.year}年${date.month}月`;
};
