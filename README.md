# [Museria global storage](https://github.com/ortexx/museria-global/) [alpha] [![alt text](https://img.shields.io/badge/Community-Chat-blueChat?style=flat-square&amp;logo=telegram)](https://t.me/museria)

This is a network configuration of the global decentralized storage for storing and receiving all the music we have on the planet. 
It is based on [museria](https://github.com/ortexx/museria/).

## Running on machine

```bash
git clone https://github.com/ortexx/museria-global.git
```

```bash
npm i && npm start
```

## Running in docker

```bash
docker-compose up
```

You can also pass environment variables before the command.

## What is the idea

There is not a single place on the planet where people can get any song fast, without troubles and for free. There are many projects that have not been implemented because of this. We believe that music creators can receive money for their work in a different way than to make a commercial product out of it and limit access to it. How exactly, we are going to propose in another project, later (automatized donations, to be short). In the meantime, let's collect the music in one place and give everyone access to it!

## How it works

At the very beginning, please check out [the museria library](https://github.com/ortexx/museria/).
So, anyone can start their own node and share some place for music uploading. 
The first node address is __storage.museria.com:80__. It is already a default option for __initialNetworkAddress__. But you can use another entry point if it is necessary. Look at the configuration file __museria.config.js__. There are all parameters you may configure by passing arguments or environment variables. Don't change anything else.

## How to get involved in this

### 1. Start your own node increasing the total size of available space on the network
For comfortable work it is enough to have only __10GB__ of free space. You can run it on any server that is open to external requests.

### 2. Add music to the storage
You can do this either using the [library](https://github.com/ortexx/museria/) or simply go to the website of any node of the global network (for example, [storage.museria.com](http://storage.museria.com)) and upload the file through the convenient interface.

### 3. Tell your friends about the project
The more people participating, the more music is on the network and more often their updating.

## Notes
We do not encourage you to violate the copyrights of music creators and sellers. The presented mechanisms make it possible to save music files in a decentralized way. The authors of these libraries and node holders are not responsible for which songs will be added to the network by people. Also, the algorithm does not allow you to know in advance which song will get to which specific node. Perhaps no one is going to break the laws and we will only collect music that can be distributed for free.

## Common issues

1. __issue__: I can't understand where i can add or get songs manually.  
__solution__: Just go to http://storage.museria.com. It is the site interface of the root node.

1. __issue__: I can't open the node site interface in my browser. It looks like there is no page with the specifed url.  
__solution__: The network use __http__ protocol, not __https__. Some browsers forces all requests redirects from http to https. Find out how to disable this behavior in your exact browser or just use another one.

1. __issue__: I can't run my own node. There is some error at the start.  
__solution__: The most likely reason is that your server is closed to external requests. If it is something else and you can't figure it out, just create an issue.

1. __issue__: I can't solve captcha when adding a song in moderation mode via the node site interface, because i can't understand what to do.  
__solution__: The captcha is an image that consists of 6 sections. Each section includes two __repeating__ characters, but with different size and rotation. You need to recognize the symbol in each section. And do it 6 times.

## Donations
The main idea of the project promotion is to involve people who are ready to run nodes and expand the network themselves. But it would be great to have some ground in any case. 10-20 servers with 200-1000 gigabytes of disk space could keep the circulation of more than a million songs. Therefore, if you are interested, but do not want to engage in the deployment of nodes yourself, then you can help financially.

* BTC: __38dyvCmUadqS2HVFEuDBVC3k1a7h6J5gqU__
* ETH: __0x4e5Ef1b362271523f5c6eDe7a54BDcA9750D81E8__


