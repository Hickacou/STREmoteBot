# STREMoteBot

Bot réalisé dans le but de restreindre l'utilisation d'emojis à certains rôles dans un serveur. 

## Commandes
### e!create
Crée un emoji possiblement restreint.
```
e!create <url> <nom> [role1] [role2] ... [roleN]
```
**Arguments :**
 - `url` : L'url de l'image de l'emote. Peut être omis si une image est attachée au message
 - `nom` : Le nom de l'emote.
 - `role1`, `role2`, ... : Les ID des rôles pouvant utiliser l'emote, séparés par des espaces. Si aucun n'est fourni, tous les membres du serveur pourront utiliser l'emote.
### e!edit
Modifie l'accès à un emoji.
```
e!edit <emoji> [role1] [role2] ... [roleN]
```
**Arguments :**
 - `emoji` : L'emoji à modifier. L'emoji doit s'afficher normalement quand vous utilisez la commande. Son ID ou son nom même entre des ':' n'est pas un argument correct.
 - `role1`, `role2`, ... : Les ID des rôles pouvant utiliser l'emote, séparés par des espaces. Si aucun n'est fourni, tous les membres du serveur pourront utiliser l'emote.

## Héberger le bot
Pour héberger votre version du bot : 
 - Clônez ce dépôt : ```git clone https://github.com/Hickacou/STREmoteBot.git```
 - Installez discord.js : ```npm install discord.js```
 - Créez un ficher `config.json` avec les propriétés suivantes : `prefix`, `token` et `whitelist` (Les ID des utilisateurs ayant la permission d'utiliser le bot.)


## Créé en 20 minutes par Hicka.