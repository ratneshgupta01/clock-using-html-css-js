setInterval(() => {
    d = new Date();
   dhour= d.getHours();
   dmin= d.getMinutes();
   dsec= d.getSeconds();
   roathour= 30*dhour + dmin/2;
   roatmin= 6*dmin;
   roatsec= 6*dsec;
 
   hour.style.transform= `rotate(${roathour}deg)`;
   minute.style.transform= `rotate(${roatmin}deg)`;
   sec.style.transform= `rotate(${roatsec}deg)`;
}, 1000);