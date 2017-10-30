import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Http} from "@angular/http";

@Injectable()
export class GetDataService {

  constructor(private http:Http) { }


  /**
   * 获取前十天的图文id数组集合
   * @returns {Observable<R|T>}
   */
  public getIdList():Observable<any>{
    return this.http.get(`http://v3.wufazhuce.com:8000/api/onelist/idlist`)
      .map(this.handleSuccess)
      .catch(this.handleError)
  }

  /**
   * 根据id获取某一天的图文列表
   * @param id
   * @returns {Observable<R|T>}
   */
  public getImageTextDetail(id:string):Observable<any>{
    return this.http.get(`http://v3.wufazhuce.com:8000/api/onelist/${id}/0`)
      .map(this.handleSuccess)
      .catch(this.handleError)
  }

  /**
   * 获取阅读频道最新的10条图文,传入的 id 参数是 data 数组中最后一条阅读的 id,即可获取下一页
   * @param id
   * @returns {Observable<R|T>}
   */
  public getReadings(id:string='0'):Observable<any>{
    return this.http.get(`http://v3.wufazhuce.com:8000/api/channel/reading/more/${id}`)
      .map(this.handleSuccess)
      .catch(this.handleError)
  }

  /**
   * 获取音乐频道最新的10条数据,传入的 id 参数是 data 数组中最后一条阅读的 id,即可获取下一页
   * @param id
   * @returns {Observable<R|T>}
   */
  public getMusics(id:string='0'):Observable<any>{
    return this.http.get(`http://v3.wufazhuce.com:8000/api/channel/music/more/${id}`)
      .map(this.handleSuccess)
      .catch(this.handleError)
  }

  /**
   * 获取影视频道最新的10条数据,传入的 id 参数是 data 数组中最后一条阅读的 id,即可获取下一页
   * @param id
   * @returns {Observable<R|T>}
   */
  public getMovies(id:string='0'):Observable<any>{
    return this.http.get(`http://v3.wufazhuce.com:8000/api/channel/movie/more/${id}`)
      .map(this.handleSuccess)
      .catch(this.handleError)
  }

  public handleSuccess(res){
    return res.json();
  }
  public handleError(error){
    return Observable.throw(`${error}`);
  }
}
