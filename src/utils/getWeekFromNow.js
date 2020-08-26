export default function getWeek(){
    const weekday=["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"]
    const weekArray=[]
    for(let i=0;i<7;i++){
      const date = new Date();
      date.setDate(date.getDate() + i)
      const dayNumber= date.getDate()
      const dayName=weekday[date.getDay()]
      weekArray.push({dayNumber, dayName})

    } 
    return weekArray
  }