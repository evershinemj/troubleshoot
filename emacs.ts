~/.emacs doesn't work for emacs on windows
solution:
    init file for emacs on windows is ~/AppData/Roaming/.emacs

ctrl-<spc> doesn't work in emacs
solution:
    think about the cause. it's due to the fact that ctrl-<spc> is already sent to system before otherwise being sent to emacs.
    in other words, it's used by another application. in this case, it's the sougou input method.
    hence, switch input method to English and the problem will be solved.
