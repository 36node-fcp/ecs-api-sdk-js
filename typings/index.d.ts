declare class SDK {
  constructor(opts?: Options);

  base: string;
  token: string | (() => string);
  auth: string;

  illegal: IllegalAPI;
  illegalType: IllegalTypeAPI;
  gantry: GantryAPI;
  whitelist: WhitelistAPI;
  trackRecord: TrackRecordAPI;
  warning: WarningAPI;
  settings: SettingsAPI;
}

export interface Options {
  base?: string;
  token?: string | (() => string);
}

export interface IllegalAPI {
  /**
   * List illegals
   */
  listIllegals(req: ListIllegalsRequest): Promise<ListIllegalsResponse>;
  /**
   * Create a illegal
   */
  createIllegal(req: CreateIllegalRequest): Promise<CreateIllegalResponse>;
  /**
   * confirm an open illegal
   */
  confirmIllegal(req: ConfirmIllegalRequest): Promise<ConfirmIllegalResponse>;
  /**
   * Find illegal device by id
   */
  getIllegal(req: GetIllegalRequest): Promise<GetIllegalResponse>;
  /**
   * Update illegal device
   */
  updateIllegal(req: UpdateIllegalRequest): Promise<UpdateIllegalResponse>;
  /**
   * Delete illegal device
   */
  deleteIllegal(req: DeleteIllegalRequest): Promise<void>;
}
export interface IllegalTypeAPI {
  /**
   * List illegalTypes
   */
  listIllegalTypes(req: ListIllegalTypesRequest): Promise<ListIllegalTypesResponse>;
  /**
   * Create a illegalType
   */
  createIllegalType(req: CreateIllegalTypeRequest): Promise<CreateIllegalTypeResponse>;
  /**
   * Find illegalType by id
   */
  getIllegalType(req: GetIllegalTypeRequest): Promise<GetIllegalTypeResponse>;
  /**
   * Update illegalType
   */
  updateIllegalType(req: UpdateIllegalTypeRequest): Promise<UpdateIllegalTypeResponse>;
  /**
   * Delete illegalType device
   */
  deleteIllegalType(req: DeleteIllegalTypeRequest): Promise<void>;
}
export interface GantryAPI {
  /**
   * List gantries
   */
  listGantries(req: ListGantriesRequest): Promise<ListGantriesResponse>;
  /**
   * Create a gantry
   */
  createGantry(req: CreateGantryRequest): Promise<CreateGantryResponse>;
  /**
   * Find gantry device by id
   */
  getGantry(req: GetGantryRequest): Promise<GetGantryResponse>;
  /**
   * Update gantry device
   */
  updateGantry(req: UpdateGantryRequest): Promise<UpdateGantryResponse>;
  /**
   * Delete gantry
   */
  deleteGantry(req: DeleteGantryRequest): Promise<void>;
}
export interface WhitelistAPI {
  /**
   * List whitelist
   */
  listWhitelist(req: ListWhitelistRequest): Promise<ListWhitelistResponse>;
  /**
   * Create a whitelist
   */
  createWhitelist(req: CreateWhitelistRequest): Promise<CreateWhitelistResponse>;
  /**
   * Find whitelist by id
   */
  getWhitelist(req: GetWhitelistRequest): Promise<GetWhitelistResponse>;
  /**
   * Update whitelist device
   */
  updateWhitelist(req: UpdateWhitelistRequest): Promise<UpdateWhitelistResponse>;
  /**
   * Delete whitelist
   */
  deleteWhitelist(req: DeleteWhitelistRequest): Promise<void>;
}
export interface TrackRecordAPI {
  /**
   * List trackRecords
   */
  listTrackRecords(req: ListTrackRecordsRequest): Promise<ListTrackRecordsResponse>;
  /**
   * Create a trackRecord
   */
  createTrackRecord(req: CreateTrackRecordRequest): Promise<CreateTrackRecordResponse>;
  /**
   * Find trackRecord by id
   */
  getTrackRecord(req: GetTrackRecordRequest): Promise<GetTrackRecordResponse>;
  /**
   * Update trackRecord device
   */
  updateTrackRecord(req: UpdateTrackRecordRequest): Promise<UpdateTrackRecordResponse>;
  /**
   * Delete trackRecord
   */
  deleteTrackRecord(req: DeleteTrackRecordRequest): Promise<void>;
}
export interface WarningAPI {
  /**
   * List warnings
   */
  listWarnings(req: ListWarningsRequest): Promise<ListWarningsResponse>;
  /**
   * Create a warning
   */
  createWarning(req: CreateWarningRequest): Promise<CreateWarningResponse>;
  /**
   * Find warning by id
   */
  getWarning(req: GetWarningRequest): Promise<GetWarningResponse>;
  /**
   * Update warning device
   */
  updateWarning(req: UpdateWarningRequest): Promise<UpdateWarningResponse>;
  /**
   * Delete warning
   */
  deleteWarning(req: DeleteWarningRequest): Promise<void>;
}
export interface SettingsAPI {
  /**
   * get settings
   */
  getSettings(req: GetSettingsRequest): Promise<GetSettingsResponse>;
  /**
   * update setting
   */
  updateSetting(req: UpdateSettingRequest): Promise<UpdateSettingResponse>;
}

export interface ListIllegalsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string[];
    plate?: string[];
    plate_like?: string;
    state?: string[];
  };
}
export interface ListIllegalsResponse {
  body: ({
    /**
     * 车牌
     */
    plate?: string;
    /**
     * 车牌颜色
     */
    plateColor?: string;
    /**
     * 车型
     */
    vehicleModel?: string;
    /**
     * 车身颜色
     */
    vehicleColor?: string;
    /**
     * 违法时间
     */
    at?: Date;
    /**
     * 违法类型
     */
    type?: string;
    /**
     * 违法代码
     */
    code?: number;
    /**
     * 处罚次数
     */
    count?: number;
    /**
     * 违法地点
     */
    place?: string;
    /**
     * 有效时长
     */
    effectiveDays?: number;
    /**
     * 图片信息
     */
    images?: string[];
    /**
     * 视频信息
     */
    videos?: string[];
    /**
     * 状态
     */
    state?: "OPEN" | "CONFIRMED";
    /**
     * 过车记录索引号
     */
    recordId?: string;
    /**
     * 号牌类型
     */
    carNumType?: string;
    /**
     * 号牌类型(中文)
     */
    carNumTypeStr?: string;
    /**
     * 过车时间
     */
    capTime?: Date;
    /**
     * 抓拍相机通道号
     */
    channelCode?: string;
    /**
     * 抓拍相机名称
     */
    channelName?: string;
    /**
     * 组织名称
     */
    orgName?: string;
    /**
     * 入库时间
     */
    createTime?: Date;
    /**
     * 车道编号
     */
    carWayCode?: number;
    /**
     * 车道编号（中文）
     */
    carWayCodeStr?: string;
    /**
     * 车辆速度
     */
    carSpeed?: number;
    /**
     * 车身颜色
     */
    carColor?: number;
    /**
     * 车辆品牌编码
     */
    carBrand?: string;
    /**
     * 车辆品牌名称
     */
    carBrandStr?: string;
    /**
     * 行驶方向
     */
    carDirect?: string;
    /**
     * 行驶方向(中文)
     */
    carDirectStr?: string;
    /**
     * 通道编号
     */
    channelId?: string;
    /**
     * 经度
     */
    lng?: number;
    /**
     * 纬度
     */
    lat?: number;
    /**
     * 所属地市
     */
    deptId?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface CreateIllegalRequest {
  /**
   * 创建违法库详情
   */
  body: {
    /**
     * 车牌
     */
    plate: string;
    /**
     * 车牌颜色
     */
    plateColor?: string;
    /**
     * 车型
     */
    vehicleModel?: string;
    /**
     * 车身颜色
     */
    vehicleColor?: string;
    /**
     * 违法时间
     */
    at: Date;
    /**
     * 违法类型
     */
    type: string;
    /**
     * 违法代码
     */
    code: number;
    /**
     * 处罚次数
     */
    count?: number;
    /**
     * 违法地点
     */
    place: string;
    /**
     * 有效时长
     */
    effectiveDays?: number;
    /**
     * 图片信息
     */
    images?: string[];
    /**
     * 视频信息
     */
    videos?: string[];
    /**
     * 状态
     */
    state?: "OPEN" | "CONFIRMED";
    /**
     * 过车记录索引号
     */
    recordId?: string;
    /**
     * 号牌类型
     */
    carNumType?: string;
    /**
     * 号牌类型(中文)
     */
    carNumTypeStr?: string;
    /**
     * 过车时间
     */
    capTime?: Date;
    /**
     * 抓拍相机通道号
     */
    channelCode?: string;
    /**
     * 抓拍相机名称
     */
    channelName?: string;
    /**
     * 组织名称
     */
    orgName?: string;
    /**
     * 入库时间
     */
    createTime?: Date;
    /**
     * 车道编号
     */
    carWayCode?: number;
    /**
     * 车道编号（中文）
     */
    carWayCodeStr?: string;
    /**
     * 车辆速度
     */
    carSpeed?: number;
    /**
     * 车身颜色
     */
    carColor?: number;
    /**
     * 车辆品牌编码
     */
    carBrand?: string;
    /**
     * 车辆品牌名称
     */
    carBrandStr?: string;
    /**
     * 行驶方向
     */
    carDirect?: string;
    /**
     * 行驶方向(中文)
     */
    carDirectStr?: string;
    /**
     * 通道编号
     */
    channelId?: string;
    /**
     * 经度
     */
    lng?: number;
    /**
     * 纬度
     */
    lat?: number;
    /**
     * 所属地市
     */
    deptId?: string;
  };
}
export interface CreateIllegalResponse {
  /**
   * 违法库
   */
  body: {
    /**
     * 车牌
     */
    plate?: string;
    /**
     * 车牌颜色
     */
    plateColor?: string;
    /**
     * 车型
     */
    vehicleModel?: string;
    /**
     * 车身颜色
     */
    vehicleColor?: string;
    /**
     * 违法时间
     */
    at?: Date;
    /**
     * 违法类型
     */
    type?: string;
    /**
     * 违法代码
     */
    code?: number;
    /**
     * 处罚次数
     */
    count?: number;
    /**
     * 违法地点
     */
    place?: string;
    /**
     * 有效时长
     */
    effectiveDays?: number;
    /**
     * 图片信息
     */
    images?: string[];
    /**
     * 视频信息
     */
    videos?: string[];
    /**
     * 状态
     */
    state?: "OPEN" | "CONFIRMED";
    /**
     * 过车记录索引号
     */
    recordId?: string;
    /**
     * 号牌类型
     */
    carNumType?: string;
    /**
     * 号牌类型(中文)
     */
    carNumTypeStr?: string;
    /**
     * 过车时间
     */
    capTime?: Date;
    /**
     * 抓拍相机通道号
     */
    channelCode?: string;
    /**
     * 抓拍相机名称
     */
    channelName?: string;
    /**
     * 组织名称
     */
    orgName?: string;
    /**
     * 入库时间
     */
    createTime?: Date;
    /**
     * 车道编号
     */
    carWayCode?: number;
    /**
     * 车道编号（中文）
     */
    carWayCodeStr?: string;
    /**
     * 车辆速度
     */
    carSpeed?: number;
    /**
     * 车身颜色
     */
    carColor?: number;
    /**
     * 车辆品牌编码
     */
    carBrand?: string;
    /**
     * 车辆品牌名称
     */
    carBrandStr?: string;
    /**
     * 行驶方向
     */
    carDirect?: string;
    /**
     * 行驶方向(中文)
     */
    carDirectStr?: string;
    /**
     * 通道编号
     */
    channelId?: string;
    /**
     * 经度
     */
    lng?: number;
    /**
     * 纬度
     */
    lat?: number;
    /**
     * 所属地市
     */
    deptId?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface ConfirmIllegalRequest {
  illegalId: string;
}
export interface ConfirmIllegalResponse {
  /**
   * 违法库
   */
  body: {
    /**
     * 车牌
     */
    plate?: string;
    /**
     * 车牌颜色
     */
    plateColor?: string;
    /**
     * 车型
     */
    vehicleModel?: string;
    /**
     * 车身颜色
     */
    vehicleColor?: string;
    /**
     * 违法时间
     */
    at?: Date;
    /**
     * 违法类型
     */
    type?: string;
    /**
     * 违法代码
     */
    code?: number;
    /**
     * 处罚次数
     */
    count?: number;
    /**
     * 违法地点
     */
    place?: string;
    /**
     * 有效时长
     */
    effectiveDays?: number;
    /**
     * 图片信息
     */
    images?: string[];
    /**
     * 视频信息
     */
    videos?: string[];
    /**
     * 状态
     */
    state?: "OPEN" | "CONFIRMED";
    /**
     * 过车记录索引号
     */
    recordId?: string;
    /**
     * 号牌类型
     */
    carNumType?: string;
    /**
     * 号牌类型(中文)
     */
    carNumTypeStr?: string;
    /**
     * 过车时间
     */
    capTime?: Date;
    /**
     * 抓拍相机通道号
     */
    channelCode?: string;
    /**
     * 抓拍相机名称
     */
    channelName?: string;
    /**
     * 组织名称
     */
    orgName?: string;
    /**
     * 入库时间
     */
    createTime?: Date;
    /**
     * 车道编号
     */
    carWayCode?: number;
    /**
     * 车道编号（中文）
     */
    carWayCodeStr?: string;
    /**
     * 车辆速度
     */
    carSpeed?: number;
    /**
     * 车身颜色
     */
    carColor?: number;
    /**
     * 车辆品牌编码
     */
    carBrand?: string;
    /**
     * 车辆品牌名称
     */
    carBrandStr?: string;
    /**
     * 行驶方向
     */
    carDirect?: string;
    /**
     * 行驶方向(中文)
     */
    carDirectStr?: string;
    /**
     * 通道编号
     */
    channelId?: string;
    /**
     * 经度
     */
    lng?: number;
    /**
     * 纬度
     */
    lat?: number;
    /**
     * 所属地市
     */
    deptId?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface GetIllegalRequest {
  illegalId: string;
}
export interface GetIllegalResponse {
  /**
   * 违法库
   */
  body: {
    /**
     * 车牌
     */
    plate?: string;
    /**
     * 车牌颜色
     */
    plateColor?: string;
    /**
     * 车型
     */
    vehicleModel?: string;
    /**
     * 车身颜色
     */
    vehicleColor?: string;
    /**
     * 违法时间
     */
    at?: Date;
    /**
     * 违法类型
     */
    type?: string;
    /**
     * 违法代码
     */
    code?: number;
    /**
     * 处罚次数
     */
    count?: number;
    /**
     * 违法地点
     */
    place?: string;
    /**
     * 有效时长
     */
    effectiveDays?: number;
    /**
     * 图片信息
     */
    images?: string[];
    /**
     * 视频信息
     */
    videos?: string[];
    /**
     * 状态
     */
    state?: "OPEN" | "CONFIRMED";
    /**
     * 过车记录索引号
     */
    recordId?: string;
    /**
     * 号牌类型
     */
    carNumType?: string;
    /**
     * 号牌类型(中文)
     */
    carNumTypeStr?: string;
    /**
     * 过车时间
     */
    capTime?: Date;
    /**
     * 抓拍相机通道号
     */
    channelCode?: string;
    /**
     * 抓拍相机名称
     */
    channelName?: string;
    /**
     * 组织名称
     */
    orgName?: string;
    /**
     * 入库时间
     */
    createTime?: Date;
    /**
     * 车道编号
     */
    carWayCode?: number;
    /**
     * 车道编号（中文）
     */
    carWayCodeStr?: string;
    /**
     * 车辆速度
     */
    carSpeed?: number;
    /**
     * 车身颜色
     */
    carColor?: number;
    /**
     * 车辆品牌编码
     */
    carBrand?: string;
    /**
     * 车辆品牌名称
     */
    carBrandStr?: string;
    /**
     * 行驶方向
     */
    carDirect?: string;
    /**
     * 行驶方向(中文)
     */
    carDirectStr?: string;
    /**
     * 通道编号
     */
    channelId?: string;
    /**
     * 经度
     */
    lng?: number;
    /**
     * 纬度
     */
    lat?: number;
    /**
     * 所属地市
     */
    deptId?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface UpdateIllegalRequest {
  illegalId: string;
  /**
   * 违法库详情
   */
  body: {
    /**
     * 车牌
     */
    plate?: string;
    /**
     * 车牌颜色
     */
    plateColor?: string;
    /**
     * 车型
     */
    vehicleModel?: string;
    /**
     * 车身颜色
     */
    vehicleColor?: string;
    /**
     * 违法时间
     */
    at?: Date;
    /**
     * 违法类型
     */
    type?: string;
    /**
     * 违法代码
     */
    code?: number;
    /**
     * 处罚次数
     */
    count?: number;
    /**
     * 违法地点
     */
    place?: string;
    /**
     * 有效时长
     */
    effectiveDays?: number;
    /**
     * 图片信息
     */
    images?: string[];
    /**
     * 视频信息
     */
    videos?: string[];
    /**
     * 状态
     */
    state?: "OPEN" | "CONFIRMED";
    /**
     * 过车记录索引号
     */
    recordId?: string;
    /**
     * 号牌类型
     */
    carNumType?: string;
    /**
     * 号牌类型(中文)
     */
    carNumTypeStr?: string;
    /**
     * 过车时间
     */
    capTime?: Date;
    /**
     * 抓拍相机通道号
     */
    channelCode?: string;
    /**
     * 抓拍相机名称
     */
    channelName?: string;
    /**
     * 组织名称
     */
    orgName?: string;
    /**
     * 入库时间
     */
    createTime?: Date;
    /**
     * 车道编号
     */
    carWayCode?: number;
    /**
     * 车道编号（中文）
     */
    carWayCodeStr?: string;
    /**
     * 车辆速度
     */
    carSpeed?: number;
    /**
     * 车身颜色
     */
    carColor?: number;
    /**
     * 车辆品牌编码
     */
    carBrand?: string;
    /**
     * 车辆品牌名称
     */
    carBrandStr?: string;
    /**
     * 行驶方向
     */
    carDirect?: string;
    /**
     * 行驶方向(中文)
     */
    carDirectStr?: string;
    /**
     * 通道编号
     */
    channelId?: string;
    /**
     * 经度
     */
    lng?: number;
    /**
     * 纬度
     */
    lat?: number;
    /**
     * 所属地市
     */
    deptId?: string;
  };
}
export interface UpdateIllegalResponse {
  /**
   * 违法库
   */
  body: {
    /**
     * 车牌
     */
    plate?: string;
    /**
     * 车牌颜色
     */
    plateColor?: string;
    /**
     * 车型
     */
    vehicleModel?: string;
    /**
     * 车身颜色
     */
    vehicleColor?: string;
    /**
     * 违法时间
     */
    at?: Date;
    /**
     * 违法类型
     */
    type?: string;
    /**
     * 违法代码
     */
    code?: number;
    /**
     * 处罚次数
     */
    count?: number;
    /**
     * 违法地点
     */
    place?: string;
    /**
     * 有效时长
     */
    effectiveDays?: number;
    /**
     * 图片信息
     */
    images?: string[];
    /**
     * 视频信息
     */
    videos?: string[];
    /**
     * 状态
     */
    state?: "OPEN" | "CONFIRMED";
    /**
     * 过车记录索引号
     */
    recordId?: string;
    /**
     * 号牌类型
     */
    carNumType?: string;
    /**
     * 号牌类型(中文)
     */
    carNumTypeStr?: string;
    /**
     * 过车时间
     */
    capTime?: Date;
    /**
     * 抓拍相机通道号
     */
    channelCode?: string;
    /**
     * 抓拍相机名称
     */
    channelName?: string;
    /**
     * 组织名称
     */
    orgName?: string;
    /**
     * 入库时间
     */
    createTime?: Date;
    /**
     * 车道编号
     */
    carWayCode?: number;
    /**
     * 车道编号（中文）
     */
    carWayCodeStr?: string;
    /**
     * 车辆速度
     */
    carSpeed?: number;
    /**
     * 车身颜色
     */
    carColor?: number;
    /**
     * 车辆品牌编码
     */
    carBrand?: string;
    /**
     * 车辆品牌名称
     */
    carBrandStr?: string;
    /**
     * 行驶方向
     */
    carDirect?: string;
    /**
     * 行驶方向(中文)
     */
    carDirectStr?: string;
    /**
     * 通道编号
     */
    channelId?: string;
    /**
     * 经度
     */
    lng?: number;
    /**
     * 纬度
     */
    lat?: number;
    /**
     * 所属地市
     */
    deptId?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface DeleteIllegalRequest {
  illegalId: string;
}
export interface ListIllegalTypesRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string[];
    name_like?: string;
    level?: string;
  };
}
export interface ListIllegalTypesResponse {
  body: ({
    /**
     * 类型名称
     */
    name?: string;
    /**
     * 违法代码
     */
    code?: string;
    /**
     * 等级
     */
    level?: "1" | "2" | "3";
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface CreateIllegalTypeRequest {
  /**
   * 创建违法库类型Body
   */
  body: {
    /**
     * 类型名称
     */
    name: string;
    /**
     * 违法代码
     */
    code: string;
    /**
     * 等级
     */
    level: "1" | "2" | "3";
  };
}
export interface CreateIllegalTypeResponse {
  /**
   * 违法类型
   */
  body: {
    /**
     * 类型名称
     */
    name?: string;
    /**
     * 违法代码
     */
    code?: string;
    /**
     * 等级
     */
    level?: "1" | "2" | "3";
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface GetIllegalTypeRequest {
  illegalTypeId: string;
}
export interface GetIllegalTypeResponse {
  /**
   * 违法类型
   */
  body: {
    /**
     * 类型名称
     */
    name?: string;
    /**
     * 违法代码
     */
    code?: string;
    /**
     * 等级
     */
    level?: "1" | "2" | "3";
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface UpdateIllegalTypeRequest {
  illegalTypeId: string;
  /**
   * 违法库类型Doc
   */
  body: {
    /**
     * 类型名称
     */
    name?: string;
    /**
     * 违法代码
     */
    code?: string;
    /**
     * 等级
     */
    level?: "1" | "2" | "3";
  };
}
export interface UpdateIllegalTypeResponse {
  /**
   * 违法类型
   */
  body: {
    /**
     * 类型名称
     */
    name?: string;
    /**
     * 违法代码
     */
    code?: string;
    /**
     * 等级
     */
    level?: "1" | "2" | "3";
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface DeleteIllegalTypeRequest {
  illegalTypeId: string;
}
export interface ListGantriesRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string[];
    name_like?: string;
    state?: string[];
    attr?: string[];
    ns?: string[];
  };
}
export interface ListGantriesResponse {
  body: ({
    /**
     * 卡口名
     */
    name?: string;
    /**
     * 所属ns
     */
    ns?: string;
    /**
     * 卡口所在经度
     */
    lng?: number;
    /**
     * 卡口所在纬度
     */
    lat?: number;
    /**
     * 上级卡口
     */
    parent?: string;
    /**
     * 是否开启
     */
    open?: boolean;
    /**
     * 所属路段
     */
    section?: string;
    /**
     * 卡口属性
     */
    attr?: "RAMP" | "MAINLINE";
    /**
     * 卡口状态
     */
    state?: "ONLINE" | "OFFLINE";
    devices?: {
      /**
       * id
       */
      id?: string;
      /**
       * id
       */
      name?: string;
      /**
       * 设备编码
       */
      code?: string;
      /**
       * 协议类型
       */
      protocolType?: "DAHUA" | "HAIKANG";
      /**
       * 厂商
       */
      product?: "DAHUA" | "HAIKANG";
      /**
       * 卡口设备类型
       */
      type?: "CAMERA";
      /**
       * IP地址
       */
      ip?: string;
      /**
       * 设备端口
       */
      port?: number;
      /**
       * 用户
       */
      username?: string;
      /**
       * 密码
       */
      password?: string;
      /**
       * 车道属性
       */
      carWayCode?: string;
    }[];
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface CreateGantryRequest {
  /**
   * 创建卡口详情
   */
  body: {
    /**
     * 卡口名
     */
    name: string;
    /**
     * 所属ns
     */
    ns: string;
    /**
     * 卡口所在经度
     */
    lng: number;
    /**
     * 卡口所在纬度
     */
    lat: number;
    /**
     * 上级卡口
     */
    parent?: string;
    /**
     * 是否开启
     */
    open?: boolean;
    /**
     * 所属路段
     */
    section?: string;
    /**
     * 卡口属性
     */
    attr: "RAMP" | "MAINLINE";
    /**
     * 卡口状态
     */
    state: "ONLINE" | "OFFLINE";
    devices?: {
      /**
       * id
       */
      id?: string;
      /**
       * id
       */
      name?: string;
      /**
       * 设备编码
       */
      code?: string;
      /**
       * 协议类型
       */
      protocolType?: "DAHUA" | "HAIKANG";
      /**
       * 厂商
       */
      product?: "DAHUA" | "HAIKANG";
      /**
       * 卡口设备类型
       */
      type?: "CAMERA";
      /**
       * IP地址
       */
      ip?: string;
      /**
       * 设备端口
       */
      port?: number;
      /**
       * 用户
       */
      username?: string;
      /**
       * 密码
       */
      password?: string;
      /**
       * 车道属性
       */
      carWayCode?: string;
    }[];
  };
}
export interface CreateGantryResponse {
  /**
   * 卡口
   */
  body: {
    /**
     * 卡口名
     */
    name?: string;
    /**
     * 所属ns
     */
    ns?: string;
    /**
     * 卡口所在经度
     */
    lng?: number;
    /**
     * 卡口所在纬度
     */
    lat?: number;
    /**
     * 上级卡口
     */
    parent?: string;
    /**
     * 是否开启
     */
    open?: boolean;
    /**
     * 所属路段
     */
    section?: string;
    /**
     * 卡口属性
     */
    attr?: "RAMP" | "MAINLINE";
    /**
     * 卡口状态
     */
    state?: "ONLINE" | "OFFLINE";
    devices?: {
      /**
       * id
       */
      id?: string;
      /**
       * id
       */
      name?: string;
      /**
       * 设备编码
       */
      code?: string;
      /**
       * 协议类型
       */
      protocolType?: "DAHUA" | "HAIKANG";
      /**
       * 厂商
       */
      product?: "DAHUA" | "HAIKANG";
      /**
       * 卡口设备类型
       */
      type?: "CAMERA";
      /**
       * IP地址
       */
      ip?: string;
      /**
       * 设备端口
       */
      port?: number;
      /**
       * 用户
       */
      username?: string;
      /**
       * 密码
       */
      password?: string;
      /**
       * 车道属性
       */
      carWayCode?: string;
    }[];
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface GetGantryRequest {
  gantryId: string;
}
export interface GetGantryResponse {
  /**
   * 卡口
   */
  body: {
    /**
     * 卡口名
     */
    name?: string;
    /**
     * 所属ns
     */
    ns?: string;
    /**
     * 卡口所在经度
     */
    lng?: number;
    /**
     * 卡口所在纬度
     */
    lat?: number;
    /**
     * 上级卡口
     */
    parent?: string;
    /**
     * 是否开启
     */
    open?: boolean;
    /**
     * 所属路段
     */
    section?: string;
    /**
     * 卡口属性
     */
    attr?: "RAMP" | "MAINLINE";
    /**
     * 卡口状态
     */
    state?: "ONLINE" | "OFFLINE";
    devices?: {
      /**
       * id
       */
      id?: string;
      /**
       * id
       */
      name?: string;
      /**
       * 设备编码
       */
      code?: string;
      /**
       * 协议类型
       */
      protocolType?: "DAHUA" | "HAIKANG";
      /**
       * 厂商
       */
      product?: "DAHUA" | "HAIKANG";
      /**
       * 卡口设备类型
       */
      type?: "CAMERA";
      /**
       * IP地址
       */
      ip?: string;
      /**
       * 设备端口
       */
      port?: number;
      /**
       * 用户
       */
      username?: string;
      /**
       * 密码
       */
      password?: string;
      /**
       * 车道属性
       */
      carWayCode?: string;
    }[];
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface UpdateGantryRequest {
  gantryId: string;
  /**
   * 卡口信息详情
   */
  body: {
    /**
     * 卡口名
     */
    name?: string;
    /**
     * 所属ns
     */
    ns?: string;
    /**
     * 卡口所在经度
     */
    lng?: number;
    /**
     * 卡口所在纬度
     */
    lat?: number;
    /**
     * 上级卡口
     */
    parent?: string;
    /**
     * 是否开启
     */
    open?: boolean;
    /**
     * 所属路段
     */
    section?: string;
    /**
     * 卡口属性
     */
    attr?: "RAMP" | "MAINLINE";
    /**
     * 卡口状态
     */
    state?: "ONLINE" | "OFFLINE";
    devices?: {
      /**
       * id
       */
      id?: string;
      /**
       * id
       */
      name?: string;
      /**
       * 设备编码
       */
      code?: string;
      /**
       * 协议类型
       */
      protocolType?: "DAHUA" | "HAIKANG";
      /**
       * 厂商
       */
      product?: "DAHUA" | "HAIKANG";
      /**
       * 卡口设备类型
       */
      type?: "CAMERA";
      /**
       * IP地址
       */
      ip?: string;
      /**
       * 设备端口
       */
      port?: number;
      /**
       * 用户
       */
      username?: string;
      /**
       * 密码
       */
      password?: string;
      /**
       * 车道属性
       */
      carWayCode?: string;
    }[];
  };
}
export interface UpdateGantryResponse {
  /**
   * 卡口
   */
  body: {
    /**
     * 卡口名
     */
    name?: string;
    /**
     * 所属ns
     */
    ns?: string;
    /**
     * 卡口所在经度
     */
    lng?: number;
    /**
     * 卡口所在纬度
     */
    lat?: number;
    /**
     * 上级卡口
     */
    parent?: string;
    /**
     * 是否开启
     */
    open?: boolean;
    /**
     * 所属路段
     */
    section?: string;
    /**
     * 卡口属性
     */
    attr?: "RAMP" | "MAINLINE";
    /**
     * 卡口状态
     */
    state?: "ONLINE" | "OFFLINE";
    devices?: {
      /**
       * id
       */
      id?: string;
      /**
       * id
       */
      name?: string;
      /**
       * 设备编码
       */
      code?: string;
      /**
       * 协议类型
       */
      protocolType?: "DAHUA" | "HAIKANG";
      /**
       * 厂商
       */
      product?: "DAHUA" | "HAIKANG";
      /**
       * 卡口设备类型
       */
      type?: "CAMERA";
      /**
       * IP地址
       */
      ip?: string;
      /**
       * 设备端口
       */
      port?: number;
      /**
       * 用户
       */
      username?: string;
      /**
       * 密码
       */
      password?: string;
      /**
       * 车道属性
       */
      carWayCode?: string;
    }[];
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface DeleteGantryRequest {
  gantryId: string;
}
export interface ListWhitelistRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string[];
    plate_like?: string;
  };
}
export interface ListWhitelistResponse {
  body: ({
    /**
     * 车牌
     */
    plate?: string;
    /**
     * 备注
     */
    remark?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface CreateWhitelistRequest {
  /**
   * 创建白名单
   */
  body: {
    /**
     * 车牌
     */
    plate: string;
    /**
     * 备注
     */
    remark?: string;
  };
}
export interface CreateWhitelistResponse {
  /**
   * 白名单
   */
  body: {
    /**
     * 车牌
     */
    plate?: string;
    /**
     * 备注
     */
    remark?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface GetWhitelistRequest {
  whitelistId: string;
}
export interface GetWhitelistResponse {
  /**
   * 白名单
   */
  body: {
    /**
     * 车牌
     */
    plate?: string;
    /**
     * 备注
     */
    remark?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface UpdateWhitelistRequest {
  whitelistId: string;
  /**
   * 白名单详情
   */
  body: {
    /**
     * 车牌
     */
    plate?: string;
    /**
     * 备注
     */
    remark?: string;
  };
}
export interface UpdateWhitelistResponse {
  /**
   * 白名单
   */
  body: {
    /**
     * 车牌
     */
    plate?: string;
    /**
     * 备注
     */
    remark?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface DeleteWhitelistRequest {
  whitelistId: string;
}
export interface ListTrackRecordsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string[];
    plate_like?: string;
    thirdId?: string[];
    carTypeCode?: string[];
  };
}
export interface ListTrackRecordsResponse {
  body: ({
    /**
     * 第三方Id
     */
    thirdId?: string;
    /**
     * 过车数据来源
     */
    source?: "DAHUA" | "DIRECT";
    /**
     * 过车车牌
     */
    plate?: string;
    /**
     * 过车类型
     */
    carType?: string;
    /**
     * 过车类型代码
     */
    carTypeCode?: string;
    /**
     * 过车车道编号
     */
    carWayCode?: number;
    /**
     * 过车车速
     */
    carSpeed?: number;
    /**
     * 过车车身颜色
     */
    carColor?: string;
    /**
     * 过车车身颜色代码
     */
    carColorCode?: string;
    /**
     * 过车车辆行进方向
     */
    carDirect?: 0 | 1 | 2 | 3;
    /**
     * 过车数据相机名称
     */
    channelName?: string;
    /**
     * 过车数据相机编码
     */
    channelCode?: string;
    /**
     * 过车数据卡口名称
     */
    orgName?: string;
    /**
     * 过车数据时间戳
     */
    capTime?: number;
    /**
     * 过车数据过车图片
     */
    carImgUrls?: string[];
    /**
     * 过车数据车牌图片
     */
    plateNumUrls?: string[];
    /**
     * 过车数据车辆品牌
     */
    carBrand?: string;
    /**
     * 过车数据车辆品牌代码
     */
    carBrandCode?: string;
    /**
     * 过车经度
     */
    lng?: string;
    /**
     * 过车纬度
     */
    lat?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface CreateTrackRecordRequest {
  /**
   * 创建过车数据详情
   */
  body: {
    /**
     * 第三方Id
     */
    thirdId?: string;
    /**
     * 过车数据来源
     */
    source?: "DAHUA" | "DIRECT";
    /**
     * 过车车牌
     */
    plate: string;
    /**
     * 过车类型
     */
    carType?: string;
    /**
     * 过车类型代码
     */
    carTypeCode?: string;
    /**
     * 过车车道编号
     */
    carWayCode?: number;
    /**
     * 过车车速
     */
    carSpeed?: number;
    /**
     * 过车车身颜色
     */
    carColor?: string;
    /**
     * 过车车身颜色代码
     */
    carColorCode?: string;
    /**
     * 过车车辆行进方向
     */
    carDirect?: 0 | 1 | 2 | 3;
    /**
     * 过车数据相机名称
     */
    channelName?: string;
    /**
     * 过车数据相机编码
     */
    channelCode?: string;
    /**
     * 过车数据卡口名称
     */
    orgName?: string;
    /**
     * 过车数据时间戳
     */
    capTime: number;
    /**
     * 过车数据过车图片
     */
    carImgUrls?: string[];
    /**
     * 过车数据车牌图片
     */
    plateNumUrls?: string[];
    /**
     * 过车数据车辆品牌
     */
    carBrand?: string;
    /**
     * 过车数据车辆品牌代码
     */
    carBrandCode?: string;
    /**
     * 过车经度
     */
    lng?: string;
    /**
     * 过车纬度
     */
    lat?: string;
  };
}
export interface CreateTrackRecordResponse {
  /**
   * 过车数据
   */
  body: {
    /**
     * 第三方Id
     */
    thirdId?: string;
    /**
     * 过车数据来源
     */
    source?: "DAHUA" | "DIRECT";
    /**
     * 过车车牌
     */
    plate?: string;
    /**
     * 过车类型
     */
    carType?: string;
    /**
     * 过车类型代码
     */
    carTypeCode?: string;
    /**
     * 过车车道编号
     */
    carWayCode?: number;
    /**
     * 过车车速
     */
    carSpeed?: number;
    /**
     * 过车车身颜色
     */
    carColor?: string;
    /**
     * 过车车身颜色代码
     */
    carColorCode?: string;
    /**
     * 过车车辆行进方向
     */
    carDirect?: 0 | 1 | 2 | 3;
    /**
     * 过车数据相机名称
     */
    channelName?: string;
    /**
     * 过车数据相机编码
     */
    channelCode?: string;
    /**
     * 过车数据卡口名称
     */
    orgName?: string;
    /**
     * 过车数据时间戳
     */
    capTime?: number;
    /**
     * 过车数据过车图片
     */
    carImgUrls?: string[];
    /**
     * 过车数据车牌图片
     */
    plateNumUrls?: string[];
    /**
     * 过车数据车辆品牌
     */
    carBrand?: string;
    /**
     * 过车数据车辆品牌代码
     */
    carBrandCode?: string;
    /**
     * 过车经度
     */
    lng?: string;
    /**
     * 过车纬度
     */
    lat?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface GetTrackRecordRequest {
  trackRecordId: string;
}
export interface GetTrackRecordResponse {
  /**
   * 过车数据
   */
  body: {
    /**
     * 第三方Id
     */
    thirdId?: string;
    /**
     * 过车数据来源
     */
    source?: "DAHUA" | "DIRECT";
    /**
     * 过车车牌
     */
    plate?: string;
    /**
     * 过车类型
     */
    carType?: string;
    /**
     * 过车类型代码
     */
    carTypeCode?: string;
    /**
     * 过车车道编号
     */
    carWayCode?: number;
    /**
     * 过车车速
     */
    carSpeed?: number;
    /**
     * 过车车身颜色
     */
    carColor?: string;
    /**
     * 过车车身颜色代码
     */
    carColorCode?: string;
    /**
     * 过车车辆行进方向
     */
    carDirect?: 0 | 1 | 2 | 3;
    /**
     * 过车数据相机名称
     */
    channelName?: string;
    /**
     * 过车数据相机编码
     */
    channelCode?: string;
    /**
     * 过车数据卡口名称
     */
    orgName?: string;
    /**
     * 过车数据时间戳
     */
    capTime?: number;
    /**
     * 过车数据过车图片
     */
    carImgUrls?: string[];
    /**
     * 过车数据车牌图片
     */
    plateNumUrls?: string[];
    /**
     * 过车数据车辆品牌
     */
    carBrand?: string;
    /**
     * 过车数据车辆品牌代码
     */
    carBrandCode?: string;
    /**
     * 过车经度
     */
    lng?: string;
    /**
     * 过车纬度
     */
    lat?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface UpdateTrackRecordRequest {
  trackRecordId: string;
  /**
   * 过车数据详情
   */
  body: {
    /**
     * 第三方Id
     */
    thirdId?: string;
    /**
     * 过车数据来源
     */
    source?: "DAHUA" | "DIRECT";
    /**
     * 过车车牌
     */
    plate?: string;
    /**
     * 过车类型
     */
    carType?: string;
    /**
     * 过车类型代码
     */
    carTypeCode?: string;
    /**
     * 过车车道编号
     */
    carWayCode?: number;
    /**
     * 过车车速
     */
    carSpeed?: number;
    /**
     * 过车车身颜色
     */
    carColor?: string;
    /**
     * 过车车身颜色代码
     */
    carColorCode?: string;
    /**
     * 过车车辆行进方向
     */
    carDirect?: 0 | 1 | 2 | 3;
    /**
     * 过车数据相机名称
     */
    channelName?: string;
    /**
     * 过车数据相机编码
     */
    channelCode?: string;
    /**
     * 过车数据卡口名称
     */
    orgName?: string;
    /**
     * 过车数据时间戳
     */
    capTime?: number;
    /**
     * 过车数据过车图片
     */
    carImgUrls?: string[];
    /**
     * 过车数据车牌图片
     */
    plateNumUrls?: string[];
    /**
     * 过车数据车辆品牌
     */
    carBrand?: string;
    /**
     * 过车数据车辆品牌代码
     */
    carBrandCode?: string;
    /**
     * 过车经度
     */
    lng?: string;
    /**
     * 过车纬度
     */
    lat?: string;
  };
}
export interface UpdateTrackRecordResponse {
  /**
   * 过车数据
   */
  body: {
    /**
     * 第三方Id
     */
    thirdId?: string;
    /**
     * 过车数据来源
     */
    source?: "DAHUA" | "DIRECT";
    /**
     * 过车车牌
     */
    plate?: string;
    /**
     * 过车类型
     */
    carType?: string;
    /**
     * 过车类型代码
     */
    carTypeCode?: string;
    /**
     * 过车车道编号
     */
    carWayCode?: number;
    /**
     * 过车车速
     */
    carSpeed?: number;
    /**
     * 过车车身颜色
     */
    carColor?: string;
    /**
     * 过车车身颜色代码
     */
    carColorCode?: string;
    /**
     * 过车车辆行进方向
     */
    carDirect?: 0 | 1 | 2 | 3;
    /**
     * 过车数据相机名称
     */
    channelName?: string;
    /**
     * 过车数据相机编码
     */
    channelCode?: string;
    /**
     * 过车数据卡口名称
     */
    orgName?: string;
    /**
     * 过车数据时间戳
     */
    capTime?: number;
    /**
     * 过车数据过车图片
     */
    carImgUrls?: string[];
    /**
     * 过车数据车牌图片
     */
    plateNumUrls?: string[];
    /**
     * 过车数据车辆品牌
     */
    carBrand?: string;
    /**
     * 过车数据车辆品牌代码
     */
    carBrandCode?: string;
    /**
     * 过车经度
     */
    lng?: string;
    /**
     * 过车纬度
     */
    lat?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface DeleteTrackRecordRequest {
  trackRecordId: string;
}
export interface ListWarningsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string[];
    plate_like?: string;
    gantryName_like?: string;
    illegalTypeName?: string[];
    illegalTypeLevel?: ("1" | "2" | "3")[];
  };
}
export interface ListWarningsResponse {
  body: ({
    /**
     * 预警车牌
     */
    plate?: string;
    /**
     * 违法类型Id
     */
    illegalTypeId?: string;
    /**
     * 违法类型名称
     */
    illegalTypeName?: string;
    /**
     * 违法类型代码
     */
    illegalTypeCode?: string;
    /**
     * 违法类型等级
     */
    illegalTypeLevel?: "1" | "2" | "3";
    /**
     * 最近一次经过卡口Id
     */
    gantryId?: string;
    /**
     * 最近一次经过卡口名称
     */
    gantryName?: string;
    /**
     * 最近一次经过卡口时间
     */
    capAt?: Date;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface CreateWarningRequest {
  /**
   * 创建过车数据详情
   */
  body: {
    /**
     * 预警车牌
     */
    plate: string;
    /**
     * 违法类型Id
     */
    illegalTypeId?: string;
    /**
     * 违法类型名称
     */
    illegalTypeName?: string;
    /**
     * 违法类型代码
     */
    illegalTypeCode?: string;
    /**
     * 违法类型等级
     */
    illegalTypeLevel?: "1" | "2" | "3";
    /**
     * 最近一次经过卡口Id
     */
    gantryId?: string;
    /**
     * 最近一次经过卡口名称
     */
    gantryName?: string;
    /**
     * 最近一次经过卡口时间
     */
    capAt: Date;
  };
}
export interface CreateWarningResponse {
  /**
   * 预警数据详情
   */
  body: {
    /**
     * 预警车牌
     */
    plate?: string;
    /**
     * 违法类型Id
     */
    illegalTypeId?: string;
    /**
     * 违法类型名称
     */
    illegalTypeName?: string;
    /**
     * 违法类型代码
     */
    illegalTypeCode?: string;
    /**
     * 违法类型等级
     */
    illegalTypeLevel?: "1" | "2" | "3";
    /**
     * 最近一次经过卡口Id
     */
    gantryId?: string;
    /**
     * 最近一次经过卡口名称
     */
    gantryName?: string;
    /**
     * 最近一次经过卡口时间
     */
    capAt?: Date;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface GetWarningRequest {
  warningId: string;
}
export interface GetWarningResponse {
  /**
   * 预警数据详情
   */
  body: {
    /**
     * 预警车牌
     */
    plate?: string;
    /**
     * 违法类型Id
     */
    illegalTypeId?: string;
    /**
     * 违法类型名称
     */
    illegalTypeName?: string;
    /**
     * 违法类型代码
     */
    illegalTypeCode?: string;
    /**
     * 违法类型等级
     */
    illegalTypeLevel?: "1" | "2" | "3";
    /**
     * 最近一次经过卡口Id
     */
    gantryId?: string;
    /**
     * 最近一次经过卡口名称
     */
    gantryName?: string;
    /**
     * 最近一次经过卡口时间
     */
    capAt?: Date;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface UpdateWarningRequest {
  warningId: string;
  /**
   * 预警数据详情
   */
  body: {
    /**
     * 预警车牌
     */
    plate?: string;
    /**
     * 违法类型Id
     */
    illegalTypeId?: string;
    /**
     * 违法类型名称
     */
    illegalTypeName?: string;
    /**
     * 违法类型代码
     */
    illegalTypeCode?: string;
    /**
     * 违法类型等级
     */
    illegalTypeLevel?: "1" | "2" | "3";
    /**
     * 最近一次经过卡口Id
     */
    gantryId?: string;
    /**
     * 最近一次经过卡口名称
     */
    gantryName?: string;
    /**
     * 最近一次经过卡口时间
     */
    capAt?: Date;
  };
}
export interface UpdateWarningResponse {
  /**
   * 预警数据详情
   */
  body: {
    /**
     * 预警车牌
     */
    plate?: string;
    /**
     * 违法类型Id
     */
    illegalTypeId?: string;
    /**
     * 违法类型名称
     */
    illegalTypeName?: string;
    /**
     * 违法类型代码
     */
    illegalTypeCode?: string;
    /**
     * 违法类型等级
     */
    illegalTypeLevel?: "1" | "2" | "3";
    /**
     * 最近一次经过卡口Id
     */
    gantryId?: string;
    /**
     * 最近一次经过卡口名称
     */
    gantryName?: string;
    /**
     * 最近一次经过卡口时间
     */
    capAt?: Date;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface DeleteWarningRequest {
  warningId: string;
}
export interface GetSettingsResponse {
  /**
   * 违法类型
   */
  body: {
    /**
     * 违法有效天数
     */
    illegalValidDay?: number;
    /**
     * 匝道超速
     */
    illegalRampOverSpeed?: boolean;
    /**
     * 仅推送各大队辖区内违法
     */
    areaPush?: boolean;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface UpdateSettingRequest {
  /**
   * 白名单详情
   */
  body: {
    /**
     * 违法有效天数
     */
    illegalValidDay?: number;
    /**
     * 匝道超速
     */
    illegalRampOverSpeed?: boolean;
    /**
     * 仅推送各大队辖区内违法
     */
    areaPush?: boolean;
  };
}
export interface UpdateSettingResponse {
  /**
   * 违法类型
   */
  body: {
    /**
     * 违法有效天数
     */
    illegalValidDay?: number;
    /**
     * 匝道超速
     */
    illegalRampOverSpeed?: boolean;
    /**
     * 仅推送各大队辖区内违法
     */
    areaPush?: boolean;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export type DateTime = Date;

/**
 * mongodb id
 */
export type MongoId = string;

export interface AnyValue {
  [k: string]: any;
}

export type IllegalState = "OPEN" | "CONFIRMED";

/**
 * 违法库详情
 */
export interface IllegalDoc {
  /**
   * 车牌
   */
  plate?: string;
  /**
   * 车牌颜色
   */
  plateColor?: string;
  /**
   * 车型
   */
  vehicleModel?: string;
  /**
   * 车身颜色
   */
  vehicleColor?: string;
  /**
   * 违法时间
   */
  at?: Date;
  /**
   * 违法类型
   */
  type?: string;
  /**
   * 违法代码
   */
  code?: number;
  /**
   * 处罚次数
   */
  count?: number;
  /**
   * 违法地点
   */
  place?: string;
  /**
   * 有效时长
   */
  effectiveDays?: number;
  /**
   * 图片信息
   */
  images?: string[];
  /**
   * 视频信息
   */
  videos?: string[];
  /**
   * 状态
   */
  state?: "OPEN" | "CONFIRMED";
  /**
   * 过车记录索引号
   */
  recordId?: string;
  /**
   * 号牌类型
   */
  carNumType?: string;
  /**
   * 号牌类型(中文)
   */
  carNumTypeStr?: string;
  /**
   * 过车时间
   */
  capTime?: Date;
  /**
   * 抓拍相机通道号
   */
  channelCode?: string;
  /**
   * 抓拍相机名称
   */
  channelName?: string;
  /**
   * 组织名称
   */
  orgName?: string;
  /**
   * 入库时间
   */
  createTime?: Date;
  /**
   * 车道编号
   */
  carWayCode?: number;
  /**
   * 车道编号（中文）
   */
  carWayCodeStr?: string;
  /**
   * 车辆速度
   */
  carSpeed?: number;
  /**
   * 车身颜色
   */
  carColor?: number;
  /**
   * 车辆品牌编码
   */
  carBrand?: string;
  /**
   * 车辆品牌名称
   */
  carBrandStr?: string;
  /**
   * 行驶方向
   */
  carDirect?: string;
  /**
   * 行驶方向(中文)
   */
  carDirectStr?: string;
  /**
   * 通道编号
   */
  channelId?: string;
  /**
   * 经度
   */
  lng?: number;
  /**
   * 纬度
   */
  lat?: number;
  /**
   * 所属地市
   */
  deptId?: string;
}

/**
 * 创建违法库详情
 */
export interface IllegalCreateBody {
  /**
   * 车牌
   */
  plate: string;
  /**
   * 车牌颜色
   */
  plateColor?: string;
  /**
   * 车型
   */
  vehicleModel?: string;
  /**
   * 车身颜色
   */
  vehicleColor?: string;
  /**
   * 违法时间
   */
  at: Date;
  /**
   * 违法类型
   */
  type: string;
  /**
   * 违法代码
   */
  code: number;
  /**
   * 处罚次数
   */
  count?: number;
  /**
   * 违法地点
   */
  place: string;
  /**
   * 有效时长
   */
  effectiveDays?: number;
  /**
   * 图片信息
   */
  images?: string[];
  /**
   * 视频信息
   */
  videos?: string[];
  /**
   * 状态
   */
  state?: "OPEN" | "CONFIRMED";
  /**
   * 过车记录索引号
   */
  recordId?: string;
  /**
   * 号牌类型
   */
  carNumType?: string;
  /**
   * 号牌类型(中文)
   */
  carNumTypeStr?: string;
  /**
   * 过车时间
   */
  capTime?: Date;
  /**
   * 抓拍相机通道号
   */
  channelCode?: string;
  /**
   * 抓拍相机名称
   */
  channelName?: string;
  /**
   * 组织名称
   */
  orgName?: string;
  /**
   * 入库时间
   */
  createTime?: Date;
  /**
   * 车道编号
   */
  carWayCode?: number;
  /**
   * 车道编号（中文）
   */
  carWayCodeStr?: string;
  /**
   * 车辆速度
   */
  carSpeed?: number;
  /**
   * 车身颜色
   */
  carColor?: number;
  /**
   * 车辆品牌编码
   */
  carBrand?: string;
  /**
   * 车辆品牌名称
   */
  carBrandStr?: string;
  /**
   * 行驶方向
   */
  carDirect?: string;
  /**
   * 行驶方向(中文)
   */
  carDirectStr?: string;
  /**
   * 通道编号
   */
  channelId?: string;
  /**
   * 经度
   */
  lng?: number;
  /**
   * 纬度
   */
  lat?: number;
  /**
   * 所属地市
   */
  deptId?: string;
}

/**
 * 违法库
 */
export type Illegal = {
  /**
   * 车牌
   */
  plate?: string;
  /**
   * 车牌颜色
   */
  plateColor?: string;
  /**
   * 车型
   */
  vehicleModel?: string;
  /**
   * 车身颜色
   */
  vehicleColor?: string;
  /**
   * 违法时间
   */
  at?: Date;
  /**
   * 违法类型
   */
  type?: string;
  /**
   * 违法代码
   */
  code?: number;
  /**
   * 处罚次数
   */
  count?: number;
  /**
   * 违法地点
   */
  place?: string;
  /**
   * 有效时长
   */
  effectiveDays?: number;
  /**
   * 图片信息
   */
  images?: string[];
  /**
   * 视频信息
   */
  videos?: string[];
  /**
   * 状态
   */
  state?: "OPEN" | "CONFIRMED";
  /**
   * 过车记录索引号
   */
  recordId?: string;
  /**
   * 号牌类型
   */
  carNumType?: string;
  /**
   * 号牌类型(中文)
   */
  carNumTypeStr?: string;
  /**
   * 过车时间
   */
  capTime?: Date;
  /**
   * 抓拍相机通道号
   */
  channelCode?: string;
  /**
   * 抓拍相机名称
   */
  channelName?: string;
  /**
   * 组织名称
   */
  orgName?: string;
  /**
   * 入库时间
   */
  createTime?: Date;
  /**
   * 车道编号
   */
  carWayCode?: number;
  /**
   * 车道编号（中文）
   */
  carWayCodeStr?: string;
  /**
   * 车辆速度
   */
  carSpeed?: number;
  /**
   * 车身颜色
   */
  carColor?: number;
  /**
   * 车辆品牌编码
   */
  carBrand?: string;
  /**
   * 车辆品牌名称
   */
  carBrandStr?: string;
  /**
   * 行驶方向
   */
  carDirect?: string;
  /**
   * 行驶方向(中文)
   */
  carDirectStr?: string;
  /**
   * 通道编号
   */
  channelId?: string;
  /**
   * 经度
   */
  lng?: number;
  /**
   * 纬度
   */
  lat?: number;
  /**
   * 所属地市
   */
  deptId?: string;
} & {
  /**
   * mongodb id
   */
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
};

/**
 * 违法库类型Doc
 */
export interface IllegalTypeDoc {
  /**
   * 类型名称
   */
  name?: string;
  /**
   * 违法代码
   */
  code?: string;
  /**
   * 等级
   */
  level?: "1" | "2" | "3";
}

/**
 * 创建违法库类型Body
 */
export interface IllegalTypeCreateBody {
  /**
   * 类型名称
   */
  name: string;
  /**
   * 违法代码
   */
  code: string;
  /**
   * 等级
   */
  level: "1" | "2" | "3";
}

/**
 * 违法类型
 */
export type IllegalType = {
  /**
   * 类型名称
   */
  name?: string;
  /**
   * 违法代码
   */
  code?: string;
  /**
   * 等级
   */
  level?: "1" | "2" | "3";
} & {
  /**
   * mongodb id
   */
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
};

/**
 * 白名单详情
 */
export interface SettingDoc {
  /**
   * 违法有效天数
   */
  illegalValidDay?: number;
  /**
   * 匝道超速
   */
  illegalRampOverSpeed?: boolean;
  /**
   * 仅推送各大队辖区内违法
   */
  areaPush?: boolean;
}

/**
 * 违法类型
 */
export type Setting = {
  /**
   * 违法有效天数
   */
  illegalValidDay?: number;
  /**
   * 匝道超速
   */
  illegalRampOverSpeed?: boolean;
  /**
   * 仅推送各大队辖区内违法
   */
  areaPush?: boolean;
} & {
  /**
   * mongodb id
   */
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
};

/**
 * 白名单详情
 */
export interface WhitelistDoc {
  /**
   * 车牌
   */
  plate?: string;
  /**
   * 备注
   */
  remark?: string;
}

/**
 * 创建白名单
 */
export interface WhitelistCreateBody {
  /**
   * 车牌
   */
  plate: string;
  /**
   * 备注
   */
  remark?: string;
}

/**
 * 白名单
 */
export type Whitelist = {
  /**
   * 车牌
   */
  plate?: string;
  /**
   * 备注
   */
  remark?: string;
} & {
  /**
   * mongodb id
   */
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
};

/**
 * 卡口属性分类
 */
export type GantryAttr = "RAMP" | "MAINLINE";

/**
 * 卡口状态分类
 */
export type GantryState = "ONLINE" | "OFFLINE";

/**
 * 卡口协议类型分类
 */
export type GantryProtocolType = "DAHUA" | "HAIKANG";

/**
 * 卡口厂商分类
 */
export type GantryProduct = "DAHUA" | "HAIKANG";

/**
 * 卡口添加方式分类
 */
export type GantryAddType = "IP" | "CODE";

/**
 * 卡口设备类型分类
 */
export type GantryType = "CAMERA";

/**
 * 卡口设备
 */
export interface GantryDeviceDoc {
  /**
   * id
   */
  id?: string;
  /**
   * id
   */
  name?: string;
  /**
   * 设备编码
   */
  code?: string;
  /**
   * 协议类型
   */
  protocolType?: "DAHUA" | "HAIKANG";
  /**
   * 厂商
   */
  product?: "DAHUA" | "HAIKANG";
  /**
   * 卡口设备类型
   */
  type?: "CAMERA";
  /**
   * IP地址
   */
  ip?: string;
  /**
   * 设备端口
   */
  port?: number;
  /**
   * 用户
   */
  username?: string;
  /**
   * 密码
   */
  password?: string;
  /**
   * 车道属性
   */
  carWayCode?: string;
}

/**
 * 卡口信息详情
 */
export interface GantryDoc {
  /**
   * 卡口名
   */
  name?: string;
  /**
   * 所属ns
   */
  ns?: string;
  /**
   * 卡口所在经度
   */
  lng?: number;
  /**
   * 卡口所在纬度
   */
  lat?: number;
  /**
   * 上级卡口
   */
  parent?: string;
  /**
   * 是否开启
   */
  open?: boolean;
  /**
   * 所属路段
   */
  section?: string;
  /**
   * 卡口属性
   */
  attr?: "RAMP" | "MAINLINE";
  /**
   * 卡口状态
   */
  state?: "ONLINE" | "OFFLINE";
  devices?: {
    /**
     * id
     */
    id?: string;
    /**
     * id
     */
    name?: string;
    /**
     * 设备编码
     */
    code?: string;
    /**
     * 协议类型
     */
    protocolType?: "DAHUA" | "HAIKANG";
    /**
     * 厂商
     */
    product?: "DAHUA" | "HAIKANG";
    /**
     * 卡口设备类型
     */
    type?: "CAMERA";
    /**
     * IP地址
     */
    ip?: string;
    /**
     * 设备端口
     */
    port?: number;
    /**
     * 用户
     */
    username?: string;
    /**
     * 密码
     */
    password?: string;
    /**
     * 车道属性
     */
    carWayCode?: string;
  }[];
}

/**
 * 创建卡口详情
 */
export interface GantryCreateBody {
  /**
   * 卡口名
   */
  name: string;
  /**
   * 所属ns
   */
  ns: string;
  /**
   * 卡口所在经度
   */
  lng: number;
  /**
   * 卡口所在纬度
   */
  lat: number;
  /**
   * 上级卡口
   */
  parent?: string;
  /**
   * 是否开启
   */
  open?: boolean;
  /**
   * 所属路段
   */
  section?: string;
  /**
   * 卡口属性
   */
  attr: "RAMP" | "MAINLINE";
  /**
   * 卡口状态
   */
  state: "ONLINE" | "OFFLINE";
  devices?: {
    /**
     * id
     */
    id?: string;
    /**
     * id
     */
    name?: string;
    /**
     * 设备编码
     */
    code?: string;
    /**
     * 协议类型
     */
    protocolType?: "DAHUA" | "HAIKANG";
    /**
     * 厂商
     */
    product?: "DAHUA" | "HAIKANG";
    /**
     * 卡口设备类型
     */
    type?: "CAMERA";
    /**
     * IP地址
     */
    ip?: string;
    /**
     * 设备端口
     */
    port?: number;
    /**
     * 用户
     */
    username?: string;
    /**
     * 密码
     */
    password?: string;
    /**
     * 车道属性
     */
    carWayCode?: string;
  }[];
}

/**
 * 卡口
 */
export type Gantry = {
  /**
   * 卡口名
   */
  name?: string;
  /**
   * 所属ns
   */
  ns?: string;
  /**
   * 卡口所在经度
   */
  lng?: number;
  /**
   * 卡口所在纬度
   */
  lat?: number;
  /**
   * 上级卡口
   */
  parent?: string;
  /**
   * 是否开启
   */
  open?: boolean;
  /**
   * 所属路段
   */
  section?: string;
  /**
   * 卡口属性
   */
  attr?: "RAMP" | "MAINLINE";
  /**
   * 卡口状态
   */
  state?: "ONLINE" | "OFFLINE";
  devices?: {
    /**
     * id
     */
    id?: string;
    /**
     * id
     */
    name?: string;
    /**
     * 设备编码
     */
    code?: string;
    /**
     * 协议类型
     */
    protocolType?: "DAHUA" | "HAIKANG";
    /**
     * 厂商
     */
    product?: "DAHUA" | "HAIKANG";
    /**
     * 卡口设备类型
     */
    type?: "CAMERA";
    /**
     * IP地址
     */
    ip?: string;
    /**
     * 设备端口
     */
    port?: number;
    /**
     * 用户
     */
    username?: string;
    /**
     * 密码
     */
    password?: string;
    /**
     * 车道属性
     */
    carWayCode?: string;
  }[];
} & {
  /**
   * mongodb id
   */
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
};

/**
 * 过车数据来源分类
 */
export type TrackRecordSource = "DAHUA" | "DIRECT";

/**
 * 过车数据车辆行进方向分类
 */
export type TrackRecordDirect = 0 | 1 | 2 | 3;

/**
 * 过车数据详情
 */
export interface TrackRecordDoc {
  /**
   * 第三方Id
   */
  thirdId?: string;
  /**
   * 过车数据来源
   */
  source?: "DAHUA" | "DIRECT";
  /**
   * 过车车牌
   */
  plate?: string;
  /**
   * 过车类型
   */
  carType?: string;
  /**
   * 过车类型代码
   */
  carTypeCode?: string;
  /**
   * 过车车道编号
   */
  carWayCode?: number;
  /**
   * 过车车速
   */
  carSpeed?: number;
  /**
   * 过车车身颜色
   */
  carColor?: string;
  /**
   * 过车车身颜色代码
   */
  carColorCode?: string;
  /**
   * 过车车辆行进方向
   */
  carDirect?: 0 | 1 | 2 | 3;
  /**
   * 过车数据相机名称
   */
  channelName?: string;
  /**
   * 过车数据相机编码
   */
  channelCode?: string;
  /**
   * 过车数据卡口名称
   */
  orgName?: string;
  /**
   * 过车数据时间戳
   */
  capTime?: number;
  /**
   * 过车数据过车图片
   */
  carImgUrls?: string[];
  /**
   * 过车数据车牌图片
   */
  plateNumUrls?: string[];
  /**
   * 过车数据车辆品牌
   */
  carBrand?: string;
  /**
   * 过车数据车辆品牌代码
   */
  carBrandCode?: string;
  /**
   * 过车经度
   */
  lng?: string;
  /**
   * 过车纬度
   */
  lat?: string;
}

/**
 * 创建过车数据详情
 */
export interface TrackRecordCreateBody {
  /**
   * 第三方Id
   */
  thirdId?: string;
  /**
   * 过车数据来源
   */
  source?: "DAHUA" | "DIRECT";
  /**
   * 过车车牌
   */
  plate: string;
  /**
   * 过车类型
   */
  carType?: string;
  /**
   * 过车类型代码
   */
  carTypeCode?: string;
  /**
   * 过车车道编号
   */
  carWayCode?: number;
  /**
   * 过车车速
   */
  carSpeed?: number;
  /**
   * 过车车身颜色
   */
  carColor?: string;
  /**
   * 过车车身颜色代码
   */
  carColorCode?: string;
  /**
   * 过车车辆行进方向
   */
  carDirect?: 0 | 1 | 2 | 3;
  /**
   * 过车数据相机名称
   */
  channelName?: string;
  /**
   * 过车数据相机编码
   */
  channelCode?: string;
  /**
   * 过车数据卡口名称
   */
  orgName?: string;
  /**
   * 过车数据时间戳
   */
  capTime: number;
  /**
   * 过车数据过车图片
   */
  carImgUrls?: string[];
  /**
   * 过车数据车牌图片
   */
  plateNumUrls?: string[];
  /**
   * 过车数据车辆品牌
   */
  carBrand?: string;
  /**
   * 过车数据车辆品牌代码
   */
  carBrandCode?: string;
  /**
   * 过车经度
   */
  lng?: string;
  /**
   * 过车纬度
   */
  lat?: string;
}

/**
 * 过车数据
 */
export type TrackRecord = {
  /**
   * 第三方Id
   */
  thirdId?: string;
  /**
   * 过车数据来源
   */
  source?: "DAHUA" | "DIRECT";
  /**
   * 过车车牌
   */
  plate?: string;
  /**
   * 过车类型
   */
  carType?: string;
  /**
   * 过车类型代码
   */
  carTypeCode?: string;
  /**
   * 过车车道编号
   */
  carWayCode?: number;
  /**
   * 过车车速
   */
  carSpeed?: number;
  /**
   * 过车车身颜色
   */
  carColor?: string;
  /**
   * 过车车身颜色代码
   */
  carColorCode?: string;
  /**
   * 过车车辆行进方向
   */
  carDirect?: 0 | 1 | 2 | 3;
  /**
   * 过车数据相机名称
   */
  channelName?: string;
  /**
   * 过车数据相机编码
   */
  channelCode?: string;
  /**
   * 过车数据卡口名称
   */
  orgName?: string;
  /**
   * 过车数据时间戳
   */
  capTime?: number;
  /**
   * 过车数据过车图片
   */
  carImgUrls?: string[];
  /**
   * 过车数据车牌图片
   */
  plateNumUrls?: string[];
  /**
   * 过车数据车辆品牌
   */
  carBrand?: string;
  /**
   * 过车数据车辆品牌代码
   */
  carBrandCode?: string;
  /**
   * 过车经度
   */
  lng?: string;
  /**
   * 过车纬度
   */
  lat?: string;
} & {
  /**
   * mongodb id
   */
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
};

/**
 * 预警数据详情
 */
export interface WarningDoc {
  /**
   * 预警车牌
   */
  plate?: string;
  /**
   * 违法类型Id
   */
  illegalTypeId?: string;
  /**
   * 违法类型名称
   */
  illegalTypeName?: string;
  /**
   * 违法类型代码
   */
  illegalTypeCode?: string;
  /**
   * 违法类型等级
   */
  illegalTypeLevel?: "1" | "2" | "3";
  /**
   * 最近一次经过卡口Id
   */
  gantryId?: string;
  /**
   * 最近一次经过卡口名称
   */
  gantryName?: string;
  /**
   * 最近一次经过卡口时间
   */
  capAt?: Date;
}

/**
 * 创建过车数据详情
 */
export interface WarningCreateBody {
  /**
   * 预警车牌
   */
  plate: string;
  /**
   * 违法类型Id
   */
  illegalTypeId?: string;
  /**
   * 违法类型名称
   */
  illegalTypeName?: string;
  /**
   * 违法类型代码
   */
  illegalTypeCode?: string;
  /**
   * 违法类型等级
   */
  illegalTypeLevel?: "1" | "2" | "3";
  /**
   * 最近一次经过卡口Id
   */
  gantryId?: string;
  /**
   * 最近一次经过卡口名称
   */
  gantryName?: string;
  /**
   * 最近一次经过卡口时间
   */
  capAt: Date;
}

/**
 * 预警数据详情
 */
export type Warning = {
  /**
   * 预警车牌
   */
  plate?: string;
  /**
   * 违法类型Id
   */
  illegalTypeId?: string;
  /**
   * 违法类型名称
   */
  illegalTypeName?: string;
  /**
   * 违法类型代码
   */
  illegalTypeCode?: string;
  /**
   * 违法类型等级
   */
  illegalTypeLevel?: "1" | "2" | "3";
  /**
   * 最近一次经过卡口Id
   */
  gantryId?: string;
  /**
   * 最近一次经过卡口名称
   */
  gantryName?: string;
  /**
   * 最近一次经过卡口时间
   */
  capAt?: Date;
} & {
  /**
   * mongodb id
   */
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
};

export interface MongoDefault {
  /**
   * mongodb id
   */
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
}

export interface Err {
  code?: string;
  type?: string;
  message: boolean;
  name: string;
  details?: {
    keyword?: string;
    message?: string;
    path?: string;
    value?: string;
  }[];
}

export = SDK;
