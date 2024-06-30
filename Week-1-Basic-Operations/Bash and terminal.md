# Bash and Terminal Study Notes

### This is a comprehensive overview of the commands and concepts covered during session on Bash and terminal by 'Laisha Wadhwa'.

## Navigation Commands
1. `pwd`: Print working directory.
2. `ls`: List directory contents.
3. `ls -l`: List detailed directory contents.
4. `ls -R`: List subdirectories recursively.
5. `ls -lt`: List directory contents by modification time.
6. `ls -la`: List detailed directory contents, including hidden files.
7. `ls -lRa`: List detailed directory contents recursively, including hidden files.
8. `ls -lr`: List directory contents in reverse order.
9. `ls -s`: List directory contents with file size.

## File and Directory Operations
10. `ls -lR | grep .json`: List all JSON files recursively.
11. `ls *.js`: List JavaScript files in the current directory only.
12. `ls Zoo*`: List files starting with "Zoo".
13. `ls ..`: List files in the parent directory.
14. `cd`: Change directory.
15. `cat index.html`: Display the contents of the "index.html" file.
16. `touch newfile.txt`: Create a new empty file named "newfile.txt".
17. `cat > newfile.txt`: Input text into "newfile.txt" (Ctrl + D to save and exit).
18. `cat >> newfile.txt`: Append text into "newfile.txt".
19. `mkdir frontend`: Create a directory named "frontend".
20. `mkdir frontend && cd frontend`: Create "frontend" directory and navigate into it.
21. `mkdir -p frontend/scripts`: Create nested directories.
22. `mv script.js runtime_script.js`: Rename "script.js" to "runtime_script.js".
23. `mv runtime_script.js app/frontend/scripts`: Move "runtime_script.js" to "app/frontend/scripts".
24. `mv stylings.css app/frontend/css/styles.css`: Move and rename CSS file.
25. `cp index.html frontend`: Copy "index.html" to "frontend" directory.
26. `cp -r circuits/testDir contracts`: Copy directory "testDir" and its contents into "contracts".
27. `rm readme`: Remove the file "readme".
28. `rm -r frontend`: Remove directory "frontend" and its contents.

## Permissions
29. `r,w,x permissions`: Read, write, execute permissions.
30. `chmod ugo-rwx filename`: Remove all permissions for user, group, and others.
31. `chmod -R ugo-rwx dirname`: Remove all permissions recursively for directory.
32. `chmod u+x newscript.sh`: Add execute permission for the owner.
33. `chmod u-x file1.txt`: Remove execute permission for the owner.
34. `4,2,1 - read, write, execute`: Numeric representation of permissions.
35. `chmod 666 fileName`: Assign read and write permissions to owner, group, and others.
36. `chmod 777 fileName`: Assign read, write, and execute permissions to owner, group, and others.

## Output and Text Manipulation
37. `echo 'Hello world'`: Print "Hello world".
38. `echo $PATH`: Print the value of the PATH variable.
39. `head newfile.txt`: Display the first 10 lines of "newfile.txt".
40. `tail newfile.txt`: Display the last 10 lines of "newfile.txt".
41. `head -20 newfile.txt`: Display the first 20 lines of "newfile.txt".
42. `tail -20 newfile.txt`: Display the last 20 lines of "newfile.txt".
43. `tail -n +25 newfile.txt | head -5`: Display lines 25 to 30 of "newfile.txt".
44. `wc newfile.txt`: Count lines, words, and characters in "newfile.txt".
45. `grep -v 'one' newfile.txt`: Display lines not containing "one".
46. `grep 'one' newfile.txt`: Display lines containing "one".
47. `grep 'one' newfile.txt | wc -l`: Count occurrences of "one" in "newfile.txt".
48. `grep -c "one" newfile.txt`: Count occurrences of "one" in "newfile.txt".
49. `grep -h "one" newfile.txt`: Suppress filename prefix.
50. `grep -hi "one" newfile.txt`: Case insensitive search without filename prefix.
51. `grep -hir "one" ./`: Search recursively in all files and directories.
52. `grep -hin "one" newfile.txt`: Show line numbers for matches.
53. `grep -hinw "one" newfile.txt`: Match whole word only.
54. `grep -w "one" newfile.txt`: Match whole word only.
55. `grep -o "one" newfile.txt`: Print only the matched parts.

## Scripting and Automation
56. Script template:
```bash
#!/bin/bash
echo "hello world"
mkdir automated_dir
cd automated_dir && touch newscript_file.txt
```

## Log Analysis
1. `grep -A 5 error log.txt:` Print 5 lines after each line containing "error".
2. `grep -B 5 error log.txt:` Print 5 lines before each line containing "error".
3. `sed -n '/ERROR/ p' log.txt:` Print lines containing "ERROR".
4. `sed 's/ERROR/CRITICAL/' log.txt:` Replace "ERROR" with "CRITICAL".
5. `sed -ibackup 's/ERROR/CRITICAL/' log.txt:` Replace "ERROR" with "CRITICAL" and create a backup.
6. `sed '3,7 s/ERROR/VERYCRITICAL/' log.txt:` Replace "ERROR" with "VERYCRITICAL" in lines 3 to 7.
7. `sed -n '3,/ERROR/ p' log.txt:` Print lines from 3rd to the first occurrence of "ERROR".
8. `awk '/CRITICAL/{print $0}' log.txt:` Print lines containing "CRITICAL".
9. `awk '{gsub(/CRITICAL/, "ERROR")}{print}' log.txt:` Replace "CRITICAL" with "ERROR" in all lines.
10. `awk 'BEGIN {print "LOG SUMMARY"} {print} END {print "End of Log Summary"}' log.txt:` Print log summary.
11. `awk '{print $1, $2}' log.txt`: Print the first two fields of each line.
12. `awk -F '{print $1, $2}' log.txt`: Incorrect usage, should use -F for specifying field separator.
13. `awk '{count[$2]++} END {print count["ERROR"]}' log.txt`: Count occurrences of "ERROR" in the second field.
14. `awk '{if ($1 > 159888638) {print $0}}' log.txt`: Print lines where the first field is greater than the specified value.