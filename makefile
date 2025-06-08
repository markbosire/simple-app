# Makefile for Git operations and project management

.PHONY: help stage commit push deploy status clean

# Default target
help:
	@echo "Available targets:"
	@echo "  stage     - Stage all changes (git add .)"
	@echo "  commit    - Commit staged changes with message"
	@echo "  push      - Push to remote main branch"
	@echo "  deploy    - Stage, commit, and push in one command"
	@echo "  status    - Show git status"
	@echo "  clean     - Clean untracked files (careful!)"
	@echo ""
	@echo "Usage examples:"
	@echo "  make commit MSG='Your commit message'"
	@echo "  make deploy MSG='Your commit message'"

# Stage all changes
stage:
	git add .
	@echo "All changes staged successfully"

# Commit with message (requires MSG parameter)
commit:
ifndef MSG
	$(error MSG is required. Usage: make commit MSG='Your commit message')
endif
	git commit -m "$(MSG)"
	@echo "Changes committed with message: $(MSG)"

# Push to remote main branch
push:
	git push origin main
	@echo "Pushed to remote main branch"

# Deploy: stage, commit, and push in one command
deploy:
ifndef MSG
	$(error MSG is required. Usage: make deploy MSG='Your commit message')
endif
	$(MAKE) stage
	$(MAKE) commit MSG="$(MSG)"
	$(MAKE) push
	@echo "Deployment complete!"

# Show git status
status:
	git status

# Clean untracked files (be careful with this!)
clean:
	@echo "This will remove all untracked files. Are you sure? [y/N]"
	@read -r confirm && [ "$$confirm" = "y" ] || [ "$$confirm" = "Y" ] || (echo "Cancelled" && exit 1)
	git clean -fd
	@echo "Untracked files removed"

# Additional useful targets
log:
	git log --oneline -10

diff:
	git diff

branches:
	git branch -a
