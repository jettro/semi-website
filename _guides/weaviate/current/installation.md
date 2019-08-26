---
layout: layout-guide
product: weaviate
product-order: 1
title: Installation
description: How to install a weaviate setup.
tags: ['Installation', 'Running', 'Kubernetes']
video-link:
video-caption:
menu-order: 2
open-graph-type: article
---

# Installation Guide

Weaviate is completely containerized, you can use Docker Compose, Kubernetes or Terraform.

{% include badges.html %}

## Index

- [Video Guide](#video-guide)
- [Basics](#basics)
- [Weaviate Sandbox](#weaviate-sandbox)
- [Docker Compose](#docker-compose)
- [Kubernetes](#kubernetes)
- [Terraform](#terraform)
- [Weaviate Configuration](#weaviate-configuration-file)
- [OpenID (OICD) Authentication](#openid-authentication)

## Video Guide

If you prefer video over text, you can use the video edition of this guide.

<iframe width="560" height="315" src="https://www.youtube.com/embed/5bqpcIX2VDQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Basics

- The main entrypoint for the Weaviate API is `/v1`.
- If your Weaviate is available over the internet or locally, you can use the [Weaviate Playground](/guides/weaviate-playground/current/) to interact with it.
- All environments run out of the box.

## Weaviate Sandbox

Sandboxes are Weaviate instances hosted on the SeMI network. Sandboxes are ideal to quickly setup and test out Weaviate's capabilities. You can request sandboxes;

- [Through this web-form](/weaviate-sandbox/)
- [Through the weaviate-cli](/guides/weaviate-cli/current/sandbox-create)

## Docker Compose

You can run a Weaviate instance with [Docker Compose](https://docs.docker.com/compose/) as follows on Linux and MacOS;

```bash
# Download the runtime files (depends on jq and basename)
$ curl -s https://raw.githubusercontent.com/semi-technologies/weaviate/{{ site.weaviate_version }}/tools/download-docker-compose-deps.sh "{{ site.weaviate_version }}" | bash
# Run Docker compose
$ docker-compose up
```

### Docker Compose (manual installation)

You can also download the files manually if you have trouble with the above script.

1. `$ mkdir weaviate && cd weaviate` 
2. Download [the files located in this folder](https://github.com/semi-technologies/weaviate/blob/{{ site.weaviate_version }}/docker-compose/runtime).
3. Run `docker-compose up` in the same location you've downloaded the files.

The output of the above setup is quite verbose, you can also run the above command with Weaviate related logs only;

```
# Run Docker compose with Weaviate logs only
$ docker-compose up -d && docker-compose logs -f weaviate
```

## Kubernetes

...

## Terraform

...

## Weaviate Configuration File

Configuration customizations can be made in the [configuration YAML file](https://github.com/semi-technologies/weaviate/blob/master/docker-compose/runtime/config.yaml).

_Note: in principle Weaviate runs out of the box and the configuration should only be changed in very customized situations._

## OpenID Authentication

In the [configuration YAML file](https://github.com/semi-technologies/weaviate/blob/master/docker-compose/runtime/config.yaml), you can specify the open ID authentication.

Currently [Anonymous Access](#anonymous-access) and [OpenID
Connect](#openid-connect-oidc) are supported. Other Authentication schemes
might become available in the near future.

If all authentication schemes - including anonymous access - are disabled
weaviate will fail to start up and ask you to configure at least one.

### Anonymous Access
If anonymous access is selected, weaviate will accept requests without any
authentication headers or parameters. Users sending such a request will be
authenticated as `user: anyonmous, group: anonymous`.

It is up to the authorization module to decide which
permissions anonymous users have. By disabling anonymous access alltogether,
any request without an allowed authentication scheme, will return `401
Unauthorized`.

#### Configuration
Anonymous Access can be configured like so in the respective environment in the
`configuration.yaml`:

*Note that this example uses yaml, however configuration can also be written as
json.*

```yaml
authentication:
    anonymous_access:
        enabled: true
```

#### How to use

Simply omit any authentication headers or parameters from your REST request to
weaviate.

### OpenID Connect (OIDC)

With [OpenID Connect](https://openid.net/connect/) (based on OAuth2) an
external identity provider and token issuer is responsible for managing users.
Weaviate's part when receiving a token (JSON Web Token or JWT) is to verify
that it was indeed signed by the configured token issuer. If the signature is
correct all content of the token is trusted. The user is then authenticated as
the subject mentioned in the token.

#### Requirements &amp; Defaults

- Any "OpenID Connect" compatible token issuer implementing [OpenID Connect
  Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html) can be
  used with weaviate. Popular open source solutions include Java-based
  [Keycloak](https://www.keycloak.org/) and Golang-based
  [dex](https://github.com/dexidp/dex).

- By default, weaviate will validate that the token includes a specified client
  id in the audience claim. If your token issuer does not support this feature,
  you can turn it off as outlined in the configuration section below.

- By default, weaviate will try to extract groups from a claim of your choice.
  Groups are a helpful tool to implement authorization roles for groups rather
  than single subjects. However, groups are not a requied OpenID spec.
  Therefore this extraction is optional and will not fail authentication if no
  groups could be found.

#### Configuration

OpenID Connect (OIDC) can be configured like so in the respective environment in the
`configuration.yaml`. Please see the inline-yaml comments for details around
the respective fields:

*Note that this example uses yaml, however configuration can also be written as
json.*

```yaml
authentication:
    oidc:
      # enabled (optional - defaults to false) turns OIDC auth on. All other fields in
      # this section will only be validated if enabled is set to true.
      enabled: true

      # issuer (required) tells weaviate how to discover the token issuer. This
      # endpoint must implement the OpenID Connect Discovery spec, so that weaviate
      # can retrieve the issuer's public key.
      #
      # The example URL below uses the path structure commonly found with keycloak
      # where an example realm 'my-weaviate-usecase' was created. The exact
      # path structure will depend on the token issuer of your choice. Please
      # see the respective documentation of your issuer about which endpoint
      # implements OIDC Discovery.
      issuer: http://my-token-issuer/auth/realms/my-weaviate-usecase

      # username_claim (required) tells weaviate which claim to use for extracting
      # the username. The username will be passed to the authorization module.
      username_claim: email

      # groups_claim (optional) tells weaviate which claim to use for extracting
      # the groups. Groups must be an array of string. If groups_claim is not set
      # weaviate will not try to extract groups and pass an empty array to the 
      # authorization module.
      groups_claim: groups

      # client_id (required unless skip_client_id_check is set to true) tells 
      # weaviate to check for a particular OAuth 2.0 client_id in the audience claim.
      # This is to prevent that a token which was signed by the correct issuer
      # but never intended to be used with weaviate can be used for authentication.
      #
      # For more information on what clients are in OAuth 2.0, see
      # https://tools.ietf.org/html/rfc6749#section-1.1
      client_id: my-weaviate-client

      # skip_client_id_check (optional, defaults to false) skips the client_id
      # validation in the audience claim as outlined in the section above.
      # Not recommended to set this option as it reduces security, only set this
      # if your token issuer is unable to provide a correct audience claim
      skip_client_id_check: false
```