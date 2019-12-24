export const formatDays = days => days
&& (isNaN(days) != true)
&& days > 0
  ?
  (
    (days == 1 ? days + ' day to summer!' : days + ' days to summer!')
  )
  :
  null;
