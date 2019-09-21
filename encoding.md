# Chinese characters are displayed weird in vim
## solution
- first, check whether this is caused by vim or caused by encoding in general
  open the file in other editors to see how it is displayed
- turns out that other editor display the file normally
- the cause is vim; check the 'encoding' option
- it is not utf8; fix it by adding in .vimrc: set encoding=utf8
