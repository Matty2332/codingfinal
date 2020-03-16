Answer the following questions within 100 words each:

## Git Question A (40% credit):

You have committed and pushed a bad change to your git repo.  How can you fix it (give exact command), without destroying history, since others might have pulled your bad change and based their changes on yours?  What would this command do?

git revert HEAD is the command to revert the last commit on the branch you are on.  Just basically undos the last commit specified by its parameter, in this case HEAD.  
## Git Question B (30% credit):

How do you delete a local branch after completing work on it.  How would you delete a remote branch?

git branch -d to delete local branch.  git push --delete followed by the branch name to delete remote branch

## Git Question C (30% credit):

What is the difference between "cloning" and "forking" a repository?  Why would you use one or the other?

Forking is just containing a separate copy of the repository and there is no command involved. Cloning is done through the command 'git clone' and it is a process of receiving all the code files to the local machine. Forking is a concept while cloning is a process. For me, cloning if I am contributing to the original or fork if I am using the code as a template is easiest way for me to compare.
