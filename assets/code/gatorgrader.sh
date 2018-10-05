---
name: cmpsc-100-fall-2018-lab3
break: true
indent: 4
---
# --> check the source code for various characteristics
# note that without an "--exact" the check is an "at least"
src/main:
    java:
        labthree/TipCalculator.java:
            --single 11 --language Java
            --multi 2 --language Java
            --fragment "println(" --count 9
            --fragment "new Date(" --count 1
# --> check the technical writing
# mdl is a Markdown linting tool
# proselint checks writing for common mistakes
writing/reflection.md:
    mdl
    proselint
    --paragraphs 1 --exact
    --words 100
# --> check the number of commits
--commits 14
# --> check that the program executes and produces 4 lines of output
# --> check that the output contains a fragment
--command "gradle -q --console plain run" --executes
--command "gradle -q --console plain run" --count 10 --exact
--command "gradle -q --console plain run" --fragment "$" --count 4 --exact
--command "gradle -q --console plain run" --fragment "28.75" --count 1 --exact
