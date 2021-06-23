import React from 'react';
import { useState } from 'react';
function Item(item) {

              function timeConverter(UNIX_timestamp){
                var a = new Date(UNIX_timestamp * 1000);
                var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                var year = a.getFullYear();
                var month = months[a.getMonth()];
                var date = a.getDate();
                var hour = a.getHours();
                var min = a.getMinutes();
                var sec = a.getSeconds();
                var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
                return time;
              }
        function durationofcontest(timegap)
        {
            var timestamp = timegap;

            // 2
            var hours = Math.floor(timestamp / 60 / 60);
            
            // 37
            var minutes = Math.floor(timestamp / 60) - (hours * 60);

            var res="";
            if(minutes<10)
            {

                return hours +":" +"0"+minutes;
            }
            else
            {
                return hours + ":" +minutes;
            }
        }
        console.log(timeConverter(item.item.startTimeSeconds),item.item.name);

    return (
        <>
        {/* <h1> helo {item.item.id}</h1> */}
        <h1> helo {item.item.name}</h1>
        <h1> helo {item.item.phase}</h1>

        <h1>  hello time {timeConverter(item.item.startTimeSeconds)}</h1>
        <h1>  duration of contest {durationofcontest(item.item.durationSeconds)}</h1>

        </>
);
}

export default Item;