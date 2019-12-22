export const formatTime = time => time
&& (isNaN(time) != true)
&& time >= 0
  ?
  (
    (time/(60*60) > 9 ? Math.floor(time/(60*60)) : '0' + Math.floor(time/(60*60)) ) +
    ':' + (time/60%60 > 9 ? Math.floor(time/60%60) : '0' + Math.floor(time/60%60) ) +
    ':' + (time%60 > 9 ? time%60 : '0' + time%60)
  )
  :
  null;
