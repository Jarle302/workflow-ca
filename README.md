[![Automated E2E Testing](https://github.com/Jarle302/workflow-ca/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/Jarle302/workflow-ca/actions/workflows/e2e-test.yml)

[![Automated Unit Testing](https://github.com/Jarle302/workflow-ca/actions/workflows/unit-test.yml/badge.svg)](https://github.com/Jarle302/workflow-ca/actions/workflows/unit-test.yml)

# New Features

## Code Quality Tools

### ESLint and Prettier

- **Integration**: Added ESLint and Prettier.
- **Trigger**: These will run on every commit to ensure code quality.

### Testing

#### Unit Testing

- **Tool**: Integrated Jest for unit testing.

#### E2E Testing

- **Tool**: Incorporated Cypress for end-to-end testing.
- **Trigger**: Tests will run on every pull request (PR) to ensure functionality.

## Deployment

### GitHub Pages

- The project will now deploy directly to GitHub Pages.

### Build Process

- When deploying, the project will automatically compile SASS into CSS for optimized performance and compatibility.
