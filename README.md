# [Museria global storage](https://github.com/ortexx/museria-global/) [alpha]

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

There is not a single place on the planet where people can get any song fast, without troubles and for free. There are many projects that have not been implemented because of this. We believe that music creators can receive money for their work in a different way than to make a commercial product out of it and limit access to it. How exactly, we are going to propose in another project, later. In the meantime, let's collect the music in one place and give everyone access to it!

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
