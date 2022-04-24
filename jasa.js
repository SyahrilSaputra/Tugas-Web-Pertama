function inputData(Bilangan)
{
	var data;
	  data = parseFloat(document.getElementById(Bilangan).value);
	return data;
}

function Output(data){
  document.getElementById("rata_rata").innerHTML = data;
}
function RataRata()
{
	var Nilai1, Nilai2, Nilai3, Nilai4, Nilai5, rata2, total;
	Nilai1 = inputData("1");
	Nilai2 = inputData("2");
	Nilai3 = inputData("3");
	Nilai4 = inputData("4");
	Nilai5 = inputData("5");

	var array = [Nilai1,Nilai2,Nilai3,Nilai4,Nilai5];
	total = 0;
	for(i=0;i<5;i++){
		total+=array[i];
	}
	
	rata2 = total/5;
	Output(rata2);
}
function nilaitengah()
{
	var Nilai1, Nilai2, Nilai3, Nilai4, Nilai5, rata2;
	Nilai1 = inputData("1");
	Nilai2 = inputData("2");
	Nilai3 = inputData("3");
	Nilai4 = inputData("4");
	Nilai5 = inputData("5");

	var array = [Nilai1, Nilai2, Nilai3, Nilai4, Nilai5];
	var median;
    array.sort(function(a, b){return b - a});
    median = array[2];
	Output(median);
}
function nilaiterbesar()
{
	var Nilai1, Nilai2, Nilai3, Nilai4, Nilai5, rata2, maximal;
	Nilai1 = inputData("1");
	Nilai2 = inputData("2");
	Nilai3 = inputData("3");
	Nilai4 = inputData("4");
	Nilai5 = inputData("5");

	var array = [Nilai1, Nilai2, Nilai3, Nilai4, Nilai5];
	maximal = Math.max.apply(Math, array);
	Output(maximal);
}
function nilaiterendah()
{
	var Nilai1, Nilai2, Nilai3, Nilai4, Nilai5, rata2, minimal;
	Nilai1 = inputData("1");
	Nilai2 = inputData("2");
	Nilai3 = inputData("3");
	Nilai4 = inputData("4");
	Nilai5 = inputData("5");

	var array = [Nilai1, Nilai2, Nilai3, Nilai4, Nilai5];
	minimal = Math.min.apply(Math, array);
	Output(minimal);
}
function Resethasil()
{
	var reset
	reset = ""
	Output(reset);
}