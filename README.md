# transactions-orchestrator

Transactions App is composed of multiple microservices, each has its own repository.

The purpose of this repo is to centralize information about those microservices :
- Dependency management with renovate
- Versions used by all microservices
- Security reports
- SBOM

## Dependency Management

### Upgrade dependencies automatically - Renovate

We use the tools Renovate for updating our dependencies automatically

Renovate needs a token to access repositories. This token must have those permissions :
- read:org
- read:packages
- repo
- workflow
