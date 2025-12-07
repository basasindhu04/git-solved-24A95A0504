GIT_JOURNEY.md
My Complete Git Mastery Challenge Journey
 Overview

This document describes my full journey through the Git Mastery Challenge, including repository setup, conflict resolution for two merges, use of advanced Git commands, and final documentation preparation.
The goal was to simulate real-world Git scenarios involving merge conflicts, multi-branch workflows, stashing, rebasing, cherry-picking, and reverting.

 Phase 1: Repository Setup
1. Clone the instructor’s repository:
git clone https://github.com/Partrnnetwork/git-mastery-challenge-template.git
cd git-mastery-challenge-template

2. Verify available branches:
git branch -a

3. Create my personal GitHub repo

A new empty repo named:

git-solved-24A95A0504

4. Configure remotes

Rename instructor remote:

git remote rename origin instructor


Add my GitHub repo as origin:

git remote add origin https://github.com/basasindhu04/git-solved-24A95A0504.git


Verify:

git remote -v

5. Push the initial main branch:
git checkout main
git push -u origin main


 Checkpoint 1: Git graph screenshot after push.

 Phase 2: Merge dev into main (First Conflict Set)
1. Attempt merge:
git checkout main
git merge dev


This produced 6 merge conflicts in:

config/app-config.yaml

config/database-config.json

docs/architecture.md

scripts/deploy.sh

scripts/monitor.js

README.md

2. Conflict Resolution Strategy

I followed the instructions:

File	Strategy
app-config.yaml	Keep production config as primary, merge dev features
database-config.json	Keep stable config, add development profile
architecture.md	Combine documentation from both branches
deploy.sh	Support both production + development environments
monitor.js	Combine features with environment-based debug logs
README.md	Combine both versions cleanly
3. Stage resolved files:
git add <each file>

4. Commit merge:
git commit -m "merge: resolved all main+dev conflicts and integrated features"
git push origin main


📸 Checkpoint 2: Git graph after this merge.

 Phase 3: Merge conflict-simulator into main (Second Conflict Set)
1. Merge attempt:
git checkout main
git merge instructor/conflict-simulator


Another set of conflicts appeared in the same files.

2. Resolution Strategy

The rules instructed:

Keep stable production code from main as primary

Add experimental/AI features as optional or commented

Ensure no conflict markers remain

Example:

In monitor.js, AI features were wrapped behind:

if (process.env.AI_MONITOR === "true") { ... }

3. After resolving:
git add .
git commit -m "merge: Resolve all conflicts between main and conflict-simulator branches — integrated stable + experimental features"
git push origin main

 Phase 4: Advanced Git Commands Demonstration

I demonstrated the following commands, each with real usage:

✔ 1. git stash
git stash push -m "Temporary debug notes"
git stash list
git stash apply
git stash drop

✔ 2. git cherry-pick

Picked a specific commit:

git cherry-pick 24367d6

✔ 3. git rebase

Created a rebase demo branch:

git checkout -b rebase-demo
echo "Rebase demo line" >> README.md
git add README.md
git commit -m "rebase: add demo line"
git rebase -i HEAD~1
git checkout main
git merge rebase-demo

✔ 4. git reset
git checkout -b reset-demo
echo "Reset demo line" >> README.md
git add README.md
git commit -m "reset: add demo line"

git reset --soft HEAD~1
git reset HEAD~1
git reset --hard HEAD~1


Merged nothing into main.

✔ 5. git revert

Reverted a specific commit:

git revert 4bbbe0b


Resolved conflict in scripts/monitor.js and completed revert.

✔ 6. git tag
git tag -a v1.0 -m "Initial stable version"
git push origin v1.0

 Phase 5: Documentation & Final Artifacts

Created:

GIT_JOURNEY.md (this file)

CHANGELOG.md

git-graph.txt

branches.txt

tags.txt

remotes.txt

Commands used:

git log --graph --oneline --all > git-graph.txt
git branch -a > branches.txt
git tag -n > tags.txt
git remote -v > remotes.txt


Committed everything:

git add .
git commit -m "docs: add final documentation and artifacts"
git push origin main

 Final Outcome

All merge conflicts resolved across two branches

Clean final main branch with no conflict markers

At least 15 meaningful commits

Demonstrated advanced Git features (stash, cherry-pick, rebase, revert, reset, tags)

Repository pushed successfully with tags and documentation

End of Git Journey

This journey demonstrates complete mastery of merging, conflict resolution, branching, and advanced Git workflows suitable for real-world DevOps and collaborative software engineering.