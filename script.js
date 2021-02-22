const seatsRow1 = document.querySelectorAll('#seatsRow1 div');
const seatsRow2 = document.querySelectorAll('#seatsRow2 div');
const seatsRow3 = document.querySelectorAll('#seatsRow3 div');
let p = document.querySelector('#sum');

// create some variables
let sum = 0;
let times = 0;
let LIST = [];
let id = 0;
let setID = 0;
const greyColor = 'rgb(197, 196, 196)';
const greenColor = 'rgb(2, 253, 2)';
let SUM;

// all 3 seats arrays make 1 array
let allSeats = [...seatsRow1, ...seatsRow2, ...seatsRow3];

allSeats.forEach(function(item) {
    item.onclick = () => {
            if (item.style.backgroundColor == greenColor) {
                sum -= 8;
                localStorage.setItem('sum', JSON.parse(sum));
                times--;
                localStorage.setItem('times', JSON.parse(times));
                p.innerHTML = `You have selected <span> ${times} </span>seats for a price of $<span>${sum}</span>`;
                SUM = p.innerHTML;
                localStorage.setItem('SUMMA', JSON.stringify(SUM));
                item.style.backgroundColor = greyColor;
                
                LIST.forEach(function(obj) {
                    if (item.getAttribute('id') == obj.id) {
                        obj.bgColor = greyColor;
                    }
                });
                localStorage.setItem("LIST", JSON.stringify(LIST));
            }
            else if (item.style.backgroundColor == 'rgb(0, 4, 255)') {
                return;
            }
            else {
                sum += 8;
                localStorage.setItem('sum', JSON.parse(sum));
                times++;
                localStorage.setItem('times', JSON.parse(times));
                item.style.backgroundColor = greenColor;
                p.innerHTML = `You have selected <span> ${times} </span>seats for a price of $<span>${sum}</span>`;
                SUM = p.innerHTML;
                localStorage.setItem('SUMMA', JSON.stringify(SUM));
                item.style.backgroundColor = greenColor;

                LIST.forEach(function(obj) {
                    if (item.getAttribute('id') == obj.id) {
                        obj.bgColor = greenColor;
                    }
                    
                });
                LIST.push({
                    bgColor : greenColor,
                    id : item.getAttribute('id')
                });


                localStorage.setItem("LIST", JSON.stringify(LIST));
            }
    }
});

allSeats.forEach((item) => {
    item.onmouseover = () => {
        if (item.style.backgroundColor == 'rgb(0, 4, 255)') {
            item.style.cursor = 'initial';
            item.style.transform = 'none';
        }
    }
});

let data = localStorage.getItem('LIST');
data = JSON.parse(data);
let summa = localStorage.getItem('SUMMA');
summa = JSON.parse(summa);
let sumls = localStorage.getItem('sum');
sumls = JSON.parse(sumls);
sumls = Number(sumls);
sum = sumls;
let timesls = localStorage.getItem('times');
timesls = JSON.parse(timesls);
timesls = Number(timesls);
times = timesls;
if (data) {
    LIST = data;
    allSeats.forEach(function(item) {
        LIST.forEach(function(obj) {
            if (item.getAttribute('id') == obj.id) {
                if (obj.bgColor == greenColor) {
                    item.style.backgroundColor = greenColor;
                }
                else {
                    item.style.backgroundColor = greyColor;
                }
            }
        })
    })
    p.innerHTML = `You have selected <span> ${times} </span>seats for a price of $<span>${sum}</span>`;
}
else {
    LIST = [];
    
}