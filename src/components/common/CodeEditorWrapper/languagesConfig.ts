const languagesConfig = [
  {
    ext: "cpp",
    editor_lang: "cpp",
    language: "C++",
    code: `#include<bits/stdc++.h>
using namespace std;

int main()
{
    cout<<"Hey Codie!"<<endl;
    return 0;
}`,
  },
  {
    ext: "py",
    editor_lang: "python",
    language: "Python",
    code: `print("Hey Codie!")`,
  },
  {
    ext: "java",
    editor_lang: "java",
    language: "Java",
    code: `public class Main {
    public static void main(String args[]) {
        System.out.println("Hey Codie!");
    }
}`,
  },
  {
    ext: "js",
    editor_lang: "javascript",
    language: "Node.js",
    code: `/* 
    Use INPUT variable to get stdin.
    Try console.log(INPUT);
*/
console.log('Hey Codie!');`,
  },
];

export default languagesConfig;