# ~/.emacs doesn't work for emacs on windows
## solution:
init file for emacs on windows is ~/AppData/Roaming/.emacs

# ctrl-<spc> doesn't work in emacs
## solution:
think about the cause. it's due to the fact that ctrl-<spc> is already sent to
system before otherwise being sent to emacs. in other words, it's used by
another application. in this case, it's the sougou input method.  hence, switch
input method to English and the problem will be solved.

# initial-frame-alist isn't set properly in terms of top and left
## solution:
just add (top . 0) (left . 0) along with width and height settings

# when using M-& and input `mpg123 ~/Music/mp3/...`, music isn't properly played
## solution:
- ~ is NOT recognized by the 'Async Shell Command' buffer!
- type /Users/wangxueming/ instead
- **the root cause is that both M-! and M-& invoke Windows command, which doesn't recognize ~**

# weird: emacs first uses /Users/wangxueming/AppData/Roaming/.emacs as init file, but later on uses /Users/wangxueming/.emacs instead
## solution:

- note how tilde expansion works. `~` is expanded according to $HOME! hence
  when $HOME is set or changed, `~` is expanded differently. hence the root
  cause is that $HOME is not set at first, and by default(on windows only),
  emacs recoginizes /Users/wangxueming/AppData/Roaming/ as `~`£¬but then HOME
  is set to /Users/wangxueming/, and `~` is accordingly set to
  /Users/wangxueming/.

- unset HOME will make `~` expanded to /Users/wangxueming/AppData/Roaming/
  again.  to ensure environment variables like HOME are unset or reset,
  computer needs to be rebooted.  (this needs to be done for normal gui
  applications. for cmd, computer needn't be rebooted, as restarting cmd is
  enough for cmd to read environment variables.)

- when HOME is not set, M-/ fetches files under
  /Users/wangxueming/AppData/Roaming/ as completions, which again proves that
  `~` is expanded to /Users/wangxueming/AppData/Roaming/ 

- for cross-platform consideration and for the sake of making life easier, set
  HOME to /Users/wangxueming/.

- plus: refer to ~/how-emacs-finds-your-init-file.txt
