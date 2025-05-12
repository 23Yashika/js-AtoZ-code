function sum()
{
    let a = document.getElementById("fno").value;
    let b = document.getElementById("sno").value;
    if(a == "" || b == "")
    {
        alert("please enter numeric value");
    } else{
        let c = Number(a) + Number(b);
        alert("sum of two no. : "+c);
    }
}
function sub()
{
    let a = Number(document.getElementById("fno").value);
    let b = Number(document.getElementById("sno").value);
    if(a == "" || b == "")
    {
        alert("please enter numeric value");
    } else{
        let c = a-b;
        alert("sub of two no. : "+c);
    }
}
function multi()
{
    let a = Number(document.getElementById("fno").value);
    let b = Number(document.getElementById("sno").value);
    if(a == "" || b == "")
    {
        alert("please enter numeric value");
    } else{
        let c = a*b;
        alert("Multiplication of two no. : "+c);
    }
}
function div()
{
    let a = Number(document.getElementById("fno").value);
    let b = Number(document.getElementById("sno").value);
    if(a == "" || b == "")
    {
        alert("please enter numeric value");
    } else{
        let c = a/b;
        alert("Division of two no. : "+c);
    }
}