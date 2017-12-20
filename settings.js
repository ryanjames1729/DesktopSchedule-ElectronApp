var perA = [];
var perB = [];

for (var i = 0; i < 21; i++) {
  perA.push("");
  perB.push("")
}

console.log("A " + perA);
console.log("B " + perB);

function fill(form){
  const fs = require('fs');

  let mydata = JSON.parse(fs.readFileSync('data.json'));


  form.oneA.value = mydata.oneA;
  form.MS1A.checked = mydata.oneA_MS;
  form.HS1A.checked = mydata.oneA_HS;
  form.twoA.value = mydata.twoA;
  form.MS2A.checked = mydata.twoA_MS;
  form.HS2A.checked = mydata.twoA_HS;
  form.threeA.value = mydata.threeA;
  form.MS3A.checked = mydata.threeA_MS;
  form.HS3A.checked = mydata.threeA_HS;
  form.fourA.value = mydata.fourA;
  form.MS4A.checked = mydata.fourA_MS;
  form.HS4A.checked = mydata.fourA_HS;
  form.fiveA.value = mydata.fiveA;
  form.MS5A.checked = mydata.fiveA_MS;
  form.HS5A.checked = mydata.fiveA_HS;
  form.sixA.value = mydata.sixA;
  form.MS6A.checked = mydata.sixA_MS;
  form.HS6A.checked = mydata.sixA_HS;
  form.sevenA.value = mydata.sevenA;
  form.MS7A.checked = mydata.sevenA_MS;
  form.HS7A.checked = mydata.sevenA_HS;
  form.oneB.value = mydata.oneB;
  form.MS1B.checked = mydata.oneB_MS;
  form.HS1B.checked = mydata.oneB_HS;
  form.twoB.value = mydata.twoB;
  form.MS2B.checked = mydata.twoB_MS;
  form.HS2B.checked = mydata.twoB_HS;
  form.threeB.value = mydata.threeB;
  form.MS3B.checked = mydata.threeB_MS;
  form.HS3B.checked = mydata.threeB_HS;
  form.fourB.value = mydata.fourB;
  form.MS4B.checked = mydata.fourB_MS;
  form.HS4B.checked = mydata.fourB_HS;
  form.fiveB.value = mydata.fiveB;
  form.MS5B.checked = mydata.fiveB_MS;
  form.HS5B.checked = mydata.fiveB_HS;
  form.sixB.value = mydata.sixB;
  form.MS6B.checked = mydata.sixB_MS;
  form.HS6B.checked = mydata.sixB_HS;
  form.sevenB.value = mydata.sevenB
  form.MS7B.checked = mydata.sevenB_MS;
  form.HS7B.checked = mydata.sevenB_HS;
}

function copyColumn(form){
  perA[0] = form.oneA.value;
  perA[1] = form.MS1A.checked;
  perA[2] = form.HS1A.checked;
  perA[3] = form.twoA.value;
  perA[4] = form.MS2A.checked;
  perA[5] = form.HS2A.checked;
  perA[6] = form.threeA.value;
  perA[7] = form.MS3A.checked;
  perA[8] = form.HS3A.checked;
  perA[9] = form.fourA.value;
  perA[10] = form.MS4A.checked;
  perA[11] = form.HS4A.checked;
  perA[12] = form.fiveA.value;
  perA[13] = form.MS5A.checked;
  perA[14] = form.HS5A.checked;
  perA[15] = form.sixA.value;
  perA[16] = form.MS6A.checked;
  perA[17] = form.HS6A.checked;
  perA[18] = form.sevenA.value;
  perA[19] = form.MS7A.checked;
  perA[20] = form.HS7A.checked;
  for (var i = 0; i < perB.length; i++) {
    perB[i] = perA[i];
  }
  form.oneB.value = perB[0];
  form.MS1B.checked = perB[1];
  form.HS1B.checked = perB[2];
  form.twoB.value = perB[3];
  form.MS2B.checked = perB[4];
  form.HS2B.checked = perB[5];
  form.threeB.value = perB[6];
  form.MS3B.checked = perB[7];
  form.HS3B.checked = perB[8];
  form.fourB.value = perB[9];
  form.MS4B.checked = perB[10];
  form.HS4B.checked = perB[11];
  form.fiveB.value = perB[12];
  form.MS5B.checked = perB[13];
  form.HS5B.checked = perB[14];
  form.sixB.value = perB[15];
  form.MS6B.checked = perB[16];
  form.HS6B.checked = perB[17];
  form.sevenB.value = perB[18];
  form.MS7B.checked = perB[19];
  form.HS7B.checked = perB[20];
}

function finished(form){
  perA[0] = form.oneA.value;
  perA[1] = form.MS1A.checked;
  perA[2] = form.HS1A.checked;
  perA[3] = form.twoA.value;
  perA[4] = form.MS2A.checked;
  perA[5] = form.HS2A.checked;
  perA[6] = form.threeA.value;
  perA[7] = form.MS3A.checked;
  perA[8] = form.HS3A.checked;
  perA[9] = form.fourA.value;
  perA[10] = form.MS4A.checked;
  perA[11] = form.HS4A.checked;
  perA[12] = form.fiveA.value;
  perA[13] = form.MS5A.checked;
  perA[14] = form.HS5A.checked;
  perA[15] = form.sixA.value;
  perA[16] = form.MS6A.checked;
  perA[17] = form.HS6A.checked;
  perA[18] = form.sevenA.value;
  perA[19] = form.MS7A.checked;
  perA[20] = form.HS7A.checked;

  perB[0] = form.oneB.value;
  perB[1] = form.MS1B.checked;
  perB[2] = form.HS1B.checked;
  perB[3] = form.twoB.value;
  perB[4] = form.MS2B.checked;
  perB[5] = form.HS2B.checked;
  perB[6] = form.threeB.value;
  perB[7] = form.MS3B.checked;
  perB[8] = form.HS3B.checked;
  perB[9] = form.fourB.value;
  perB[10] = form.MS4B.checked;
  perB[11] = form.HS4B.checked;
  perB[12] = form.fiveB.value;
  perB[13] = form.MS5B.checked;
  perB[14] = form.HS5B.checked;
  perB[15] = form.sixB.value;
  perB[16] = form.MS6B.checked;
  perB[17] = form.HS6B.checked;
  perB[18] = form.sevenB.value;
  perB[19] = form.MS7B.checked;
  perB[20] = form.HS7B.checked;



  const fs = require('fs');

  let schedule = {
    oneA: perA[0],
    oneA_MS: perA[1],
    oneA_HS: perA[2],
    twoA: perA[3],
    twoA_MS: perA[4],
    twoA_HS: perA[5],
    threeA: perA[6],
    threeA_MS: perA[7],
    threeA_HS: perA[8],
    fourA: perA[9],
    fourA_MS: perA[10],
    fourA_HS: perA[11],
    fiveA: perA[12],
    fiveA_MS: perA[13],
    fiveA_HS: perA[14],
    sixA: perA[15],
    sixA_MS: perA[16],
    sixA_HS: perA[17],
    sevenA: perA[18],
    sevenA_MS: perA[19],
    sevenA_HS: perA[20],
    oneB: perB[0],
    oneB_MS: perB[1],
    oneB_HS: perB[2],
    twoB: perB[3],
    twoB_MS: perB[4],
    twoB_HS: perB[5],
    threeB: perB[6],
    threeB_MS: perB[7],
    threeB_HS: perB[8],
    fourB: perB[9],
    fourB_MS: perB[10],
    fourB_HS: perB[11],
    fiveB: perB[12],
    fiveB_MS: perB[13],
    fiveB_HS: perB[14],
    sixB: perB[15],
    sixB_MS: perB[16],
    sixB_HS: perB[17],
    sevenB: perB[18],
    sevenB_MS: perB[19],
    sevenB_HS: perB[20]
  }

  let data = JSON.stringify(schedule);
  fs.writeFileSync('data.json', data);

  alert("Classes Submitted!");


}
