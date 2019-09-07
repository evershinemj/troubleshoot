the following commands don't work:
find . -name '*.flv' -atime -1 -exec mpv {} '\'
find . -name '*.flv' -atime -1 -exec mpv {} \
find . -name '*.flv' -atime -1 -exec mpv '{} \'

error message:
-exec has no argument

solution:
    this is **syntax error**.
    **semicolon** is the terminating char for -exec!
    and it should be escaped by \
    correct syntax:
    find . -name '*.flv' -atime -1 -exec mpv {} \;
