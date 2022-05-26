document.addEventListener("DOMContentLoaded", function() {
    // this function runs when the DOM is ready, i.e. when the document has been parsed
    var a=new Date();
    var b=new Date('25-Sep-2017');
    var c=Math.round( ((parseInt((a - b) / (24 * 3600 * 1000))/365)*100),2)/100;
    //document.getElementById("about_me").textContent = "Hello,"+ String.fromCharCode(13)+" I am Snehasis Mondal, a Full Stack Java Developer and an Engineer by Heart. I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to make a change.";
    document.getElementById("experience").textContent = "I have "+c+ " years of experience working for Tata Consultancy Service as IT Analyst in Digital Cadre. ";
    //document.getElementById("skills").textContent = "Hi, This is Snehasis. I have "+c+ " years of experience";
});