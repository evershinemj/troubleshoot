* in autocmd pattern part stands for anything, including path separator
and there is this line in .vim/plugin/autocmd:
    au BufRead,BufWritePost ~/linecomplete/*,~/mydict/*  :sort | echo 'BufRead/BufWritePost: linecomplete/dict file sorted'
thus `git commit` also sorts the COMMIT_MSG file, which is not wanted
solution:
    git confit --local core.editor emacs
