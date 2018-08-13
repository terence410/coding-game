using System;
using System.Text.RegularExpressions;
class S
{
    static void Main()
    {
        string regex = @"[\(\)]\w*[\(\)]|[{}]\w*[{}]|[\[\]]\w*[\[\]]|[<>]\w*[<>]";
        for (int i = 0, N = int.Parse(Console.ReadLine()); i < N; i++)
        {
            string text = Console.ReadLine();
            while(Regex.Match(text, regex).Success) text = Regex.Replace(text, regex, "");
            Console.WriteLine((!Regex.Match(text, @"[\[\]\(\){}<>]").Success+"").ToLower());
        }
    }
}
