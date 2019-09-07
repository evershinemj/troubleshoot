when a directory has a complex or weird layout, there are to ways to cp or mv files inside:
# command line solution
```
find . -name '*.flv' -atime -1 -exec cp {} ~/foo \;
```
# gui solution
```
in file explorer:
- navigation to the directory, use ctrl-f to search for target files(search with extension, for example).
- perform cp or mv with drag and drop.
```
