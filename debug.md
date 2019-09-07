in debug mode in eclipse, `step over` jumps unexpectedly
cause:
  the file being debugged has been updated. in project menu, choose `build all`, then restart the server

continue(f8) in eclipse debug mode doesn't jump to the next breakpoint
cause:
  there is a break in if, hence that breakpoint is skipped
