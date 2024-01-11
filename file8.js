//using switch statement 

let browser = "safari";

switch (browser) {
    case "firefox":
        {
            document.write("You are using firefox");
            break;
        }
    case "safari":
        {
            document.write("You are using safari");
            break;
        }
    case "opera":
        {
            document.write("You are using opera");
            break;
        }
    case "edge":
        {
            document.write("You are using edge");
            break;
        }
    case "chrome":
        {
            document.write("You are using chrome");
            break;
        }
    default:
        {
            document.write("Invalid browser!");
            break;
        }    
}