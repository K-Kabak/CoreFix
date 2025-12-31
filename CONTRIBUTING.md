# Contributing to CoreFix

Thank you for considering contributing to CoreFix! This document provides guidelines and instructions for contributing.

## Code of Conduct

Please be respectful and constructive in all interactions. We're committed to providing a welcoming and inclusive environment.

## How to Contribute

### Reporting Bugs
- Check if the bug has already been reported in [Issues](https://github.com/yourusername/corefix/issues)
- If not, create a new issue with:
  - Clear, descriptive title
  - Detailed description of the bug
  - Steps to reproduce
  - Expected vs actual behavior
  - Screenshots if applicable
  - System info (OS, Node version, etc.)

### Suggesting Enhancements
- Use [Issues](https://github.com/yourusername/corefix/issues) to suggest features
- Provide clear use case and benefits
- Include mockups/examples if possible

### Code Contributions

#### Setup Development Environment
```bash
# Fork and clone your fork
git clone https://github.com/yourusername/corefix.git
cd corefix

# Install dependencies
npm install

# Create feature branch
git checkout -b feat/your-feature-name
```

#### Commit Guidelines (Conventional Commits)

Use the format: `<type>(<scope>): <subject>`

**Types:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, missing semicolons, etc.)
- `refactor:` Code refactoring without feature changes
- `perf:` Performance improvements
- `test:` Test additions/updates
- `chore:` Build, dependencies, tooling changes

**Examples:**
```bash
git commit -m "feat(hero): add animated gradient background"
git commit -m "fix(contact-form): resolve email validation issue"
git commit -m "docs(readme): update installation instructions"
git commit -m "style(components): add consistent spacing"
```

#### Code Style
- Use ESLint: `npm run lint`
- Auto-fix issues: `npm run lint --fix`
- Follow existing code patterns
- Use meaningful variable/function names
- Add comments for complex logic

#### Testing
- Test locally: `npm run dev`
- Build production: `npm run build`
- Preview build: `npm run preview`
- Test responsive design across breakpoints

#### Pull Request Process

1. **Update from main:**
   ```bash
   git fetch origin
   git rebase origin/main
   ```

2. **Create Pull Request:**
   - Use clear title describing the change
   - Reference related issues: "Closes #123"
   - Describe what was changed and why
   - Include any breaking changes

3. **PR Title Format:**
   - `feat: add new feature description`
   - `fix: resolve issue with X`
   - `docs: update documentation`

4. **Wait for Review:**
   - Address feedback constructively
   - Re-test after changes
   - Ensure CI passes

## Development Workflow

```
main (stable)
    ↓
feature/fix branch (development)
    ↓
Pull Request (review)
    ↓
Merge to main (release)
```

## Branch Naming
- Feature: `feat/feature-name`
- Fix: `fix/issue-name`
- Docs: `docs/description`
- Chore: `chore/task-name`

## Questions?
- Check existing [Issues](https://github.com/yourusername/corefix/issues) and [Discussions](https://github.com/yourusername/corefix/discussions)
- Open a Discussion for questions

---

Thank you for contributing to CoreFix! 🎉
