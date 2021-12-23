import Promise from 'bluebird';
import * as Redis from 'redis';

declare module 'redis' {
  export interface RedisClient extends NodeJS.EventEmitter {
		lrangeAsync(...args: any[]): Promise<any>;
		lremAsync(...args: any[]): Promise<any>;
		delAsync(...args: any[]): Promise<any>;
		setAsync(...args: any[]): Promise<any>;
		llenAsync(...args: any[]): Promise<any>;
		hmsetAsync(...args: any[]): Promise<any>;
		hgetAsync(...args: any[]): Promise<any>;
		getAsync(...args: any[]): Promise<any>;
		hmgetAsync(...args: any[]): Promise<any>;
		keysAsync(...args: any[]): Promise<any>;
		hgetallAsync(...args: any[]): Promise<any>;
		lpushAsync(...args: any[]): Promise<any>;
  }
}

const oldRedisClient = Redis.createClient();
const client = Promise.promisifyAll(oldRedisClient) as Redis.RedisClient;

export default client;
