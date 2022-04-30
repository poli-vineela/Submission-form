function validate()
{
    if(document.SUBMISSIONFORM.NAME.value=="")
    {
    alert("Please enter your name");
    document.SUBMISSIONFORM.NAME.focus();
    return false;
    }
    if(document.SUBMISSIONFORM.AGE.value=="")
    {
        alert("Please enter your age");
        document.SUBMISSIONFORM.AGE.focus();
        return false;
    }
    else if(isNaN(document.SUBMISSIONFORM.AGE.value)||(document.SUBMISSIONFORM.AGE.value>100))
    {
        alert("Please enter valid age");
        document.SUBMISSIONFORM.AGE.focus();
        return false;
    }
    if(document.SUBMISSIONFORM.HEIGHT.value=="")
    {
        alert("Please enter your height");
        document.SUBMISSIONFORM.HEIGHT.focus();
        return false;
    }
    else if(isNaN(document.SUBMISSIONFORM.HEIGHT.value))
    {
        alert("Please enter valid height");
        document.SUBMISSIONFORM.HEIGHT.focus();
        return false;

    }
    document.write("Your Registration form is submitted successfully...");
    return (true);
}
