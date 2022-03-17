declare class SDK {
  constructor(opts?: Options);

  base: string;
  token: string | (() => string);
  auth: string;

  illegalRecord: IllegalRecordAPI;
  illegalType: IllegalTypeAPI;
  gantryDevice: GantryDeviceAPI;
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

export interface IllegalRecordAPI {
  /**
   * List illegalRecords
   */
  listIllegalRecords(req: ListIllegalRecordsRequest): Promise<ListIllegalRecordsResponse>;
  /**
   * Create an illegal record
   */
  createIllegalRecord(req: CreateIllegalRecordRequest): Promise<CreateIllegalRecordResponse>;
  /**
   * confirm an open illegal record
   */
  confirmIllegalRecord(req: ConfirmIllegalRecordRequest): Promise<ConfirmIllegalRecordResponse>;
  /**
   * Find an illegal record by id
   */
  getIllegalRecord(req: GetIllegalRecordRequest): Promise<GetIllegalRecordResponse>;
  /**
   * Update illegal record
   */
  updateIllegalRecord(req: UpdateIllegalRecordRequest): Promise<UpdateIllegalRecordResponse>;
  /**
   * Delete illegal device
   */
  deleteIllegalRecord(req: DeleteIllegalRecordRequest): Promise<void>;
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
export interface GantryDeviceAPI {
  /**
   * List gantryDevices
   */
  listGantryDevices(req: ListGantryDevicesRequest): Promise<ListGantryDevicesResponse>;
  /**
   * Create a gantryDevice
   */
  createGantryDevice(req: CreateGantryDeviceRequest): Promise<CreateGantryDeviceResponse>;
  /**
   * Find gantryDevice by id
   */
  getGantryDevice(req: GetGantryDeviceRequest): Promise<GetGantryDeviceResponse>;
  /**
   * Update gantryDevice
   */
  updateGantryDevice(req: UpdateGantryDeviceRequest): Promise<UpdateGantryDeviceResponse>;
  /**
   * Delete gantryDevice
   */
  deleteGantryDevice(req: DeleteGantryDeviceRequest): Promise<void>;
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

export interface ListIllegalRecordsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string[];
    plate?: string[];
    plate_like?: string;
    state?: ("DRAFT" | "OPEN" | "CLOSED")[];
  };
}
export interface ListIllegalRecordsResponse {
  body: ({
    /**
     * 过车记录索引号
     */
    thirdId?: string;
    /**
     * 来源
     */
    source?: "GUANGXIN" | "HENGTONG";
    /**
     * 车牌
     */
    plate?: string;
    /**
     * 车牌类型
     */
    plateType?: string;
    /**
     * 车牌类型中文
     */
    plateTypeStr?: string;
    /**
     * 车型
     */
    carType?: string;
    /**
     * 车型中文
     */
    carTypeStr?: string;
    /**
     * 车道编号
     */
    carWayCode?: number;
    /**
     * 车速
     */
    carSpeed?: number;
    /**
     * 车身颜色代码
     */
    carColor?: string;
    /**
     * 车身颜色中文
     */
    carColorStr?: string;
    /**
     * 车辆行进方向
     */
    carDirect?: number;
    /**
     * 抓拍相机名称
     */
    channelName?: string;
    /**
     * 抓拍相机通道号
     */
    channelCode?: string;
    /**
     * 卡口名称
     */
    gantryName?: string;
    /**
     * 卡口代码
     */
    gantryCode?: string;
    /**
     * 违法时间
     */
    capTime?: Date;
    /**
     * 过车图片
     */
    carImages?: string[];
    /**
     * 车牌图片
     */
    plateImages?: string[];
    /**
     * 车辆品牌代码
     */
    carBrand?: string;
    /**
     * 车辆品牌中文
     */
    carBrandStr?: string;
    /**
     * 违法代码
     */
    name?: string;
    /**
     * 违法简称
     */
    shortName?: string;
    /**
     * 违法名称
     */
    code?: string;
    /**
     * 违法类型
     */
    type?: string;
    /**
     * 违法地点
     */
    place?: string;
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
    /**
     * 这条违法过期的时间
     */
    expiredAt?: Date;
    /**
     * 状态
     */
    state?: "DRAFT" | "OPEN" | "CLOSED";
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
export interface CreateIllegalRecordRequest {
  /**
   * 创建违法记录
   */
  body: {
    /**
     * 过车记录索引号
     */
    thirdId?: string;
    /**
     * 来源
     */
    source?: "GUANGXIN" | "HENGTONG";
    /**
     * 车牌
     */
    plate: string;
    /**
     * 车牌类型
     */
    plateType?: string;
    /**
     * 车牌类型中文
     */
    plateTypeStr?: string;
    /**
     * 车型
     */
    carType?: string;
    /**
     * 车型中文
     */
    carTypeStr?: string;
    /**
     * 车道编号
     */
    carWayCode?: number;
    /**
     * 车速
     */
    carSpeed?: number;
    /**
     * 车身颜色代码
     */
    carColor?: string;
    /**
     * 车身颜色中文
     */
    carColorStr?: string;
    /**
     * 车辆行进方向
     */
    carDirect?: number;
    /**
     * 抓拍相机名称
     */
    channelName?: string;
    /**
     * 抓拍相机通道号
     */
    channelCode?: string;
    /**
     * 卡口名称
     */
    gantryName?: string;
    /**
     * 卡口代码
     */
    gantryCode?: string;
    /**
     * 违法时间
     */
    capTime: Date;
    /**
     * 过车图片
     */
    carImages?: string[];
    /**
     * 车牌图片
     */
    plateImages?: string[];
    /**
     * 车辆品牌代码
     */
    carBrand?: string;
    /**
     * 车辆品牌中文
     */
    carBrandStr?: string;
    /**
     * 违法代码
     */
    name?: string;
    /**
     * 违法简称
     */
    shortName?: string;
    /**
     * 违法名称
     */
    code: string;
    /**
     * 违法类型
     */
    type: string;
    /**
     * 违法地点
     */
    place: string;
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
    /**
     * 这条违法过期的时间
     */
    expiredAt?: Date;
    /**
     * 状态
     */
    state?: "DRAFT" | "OPEN" | "CLOSED";
  };
}
export interface CreateIllegalRecordResponse {
  /**
   * 违法库
   */
  body: {
    /**
     * 过车记录索引号
     */
    thirdId?: string;
    /**
     * 来源
     */
    source?: "GUANGXIN" | "HENGTONG";
    /**
     * 车牌
     */
    plate?: string;
    /**
     * 车牌类型
     */
    plateType?: string;
    /**
     * 车牌类型中文
     */
    plateTypeStr?: string;
    /**
     * 车型
     */
    carType?: string;
    /**
     * 车型中文
     */
    carTypeStr?: string;
    /**
     * 车道编号
     */
    carWayCode?: number;
    /**
     * 车速
     */
    carSpeed?: number;
    /**
     * 车身颜色代码
     */
    carColor?: string;
    /**
     * 车身颜色中文
     */
    carColorStr?: string;
    /**
     * 车辆行进方向
     */
    carDirect?: number;
    /**
     * 抓拍相机名称
     */
    channelName?: string;
    /**
     * 抓拍相机通道号
     */
    channelCode?: string;
    /**
     * 卡口名称
     */
    gantryName?: string;
    /**
     * 卡口代码
     */
    gantryCode?: string;
    /**
     * 违法时间
     */
    capTime?: Date;
    /**
     * 过车图片
     */
    carImages?: string[];
    /**
     * 车牌图片
     */
    plateImages?: string[];
    /**
     * 车辆品牌代码
     */
    carBrand?: string;
    /**
     * 车辆品牌中文
     */
    carBrandStr?: string;
    /**
     * 违法代码
     */
    name?: string;
    /**
     * 违法简称
     */
    shortName?: string;
    /**
     * 违法名称
     */
    code?: string;
    /**
     * 违法类型
     */
    type?: string;
    /**
     * 违法地点
     */
    place?: string;
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
    /**
     * 这条违法过期的时间
     */
    expiredAt?: Date;
    /**
     * 状态
     */
    state?: "DRAFT" | "OPEN" | "CLOSED";
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
export interface ConfirmIllegalRecordRequest {
  illegalRecordId: string;
}
export interface ConfirmIllegalRecordResponse {
  /**
   * 违法库
   */
  body: {
    /**
     * 过车记录索引号
     */
    thirdId?: string;
    /**
     * 来源
     */
    source?: "GUANGXIN" | "HENGTONG";
    /**
     * 车牌
     */
    plate?: string;
    /**
     * 车牌类型
     */
    plateType?: string;
    /**
     * 车牌类型中文
     */
    plateTypeStr?: string;
    /**
     * 车型
     */
    carType?: string;
    /**
     * 车型中文
     */
    carTypeStr?: string;
    /**
     * 车道编号
     */
    carWayCode?: number;
    /**
     * 车速
     */
    carSpeed?: number;
    /**
     * 车身颜色代码
     */
    carColor?: string;
    /**
     * 车身颜色中文
     */
    carColorStr?: string;
    /**
     * 车辆行进方向
     */
    carDirect?: number;
    /**
     * 抓拍相机名称
     */
    channelName?: string;
    /**
     * 抓拍相机通道号
     */
    channelCode?: string;
    /**
     * 卡口名称
     */
    gantryName?: string;
    /**
     * 卡口代码
     */
    gantryCode?: string;
    /**
     * 违法时间
     */
    capTime?: Date;
    /**
     * 过车图片
     */
    carImages?: string[];
    /**
     * 车牌图片
     */
    plateImages?: string[];
    /**
     * 车辆品牌代码
     */
    carBrand?: string;
    /**
     * 车辆品牌中文
     */
    carBrandStr?: string;
    /**
     * 违法代码
     */
    name?: string;
    /**
     * 违法简称
     */
    shortName?: string;
    /**
     * 违法名称
     */
    code?: string;
    /**
     * 违法类型
     */
    type?: string;
    /**
     * 违法地点
     */
    place?: string;
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
    /**
     * 这条违法过期的时间
     */
    expiredAt?: Date;
    /**
     * 状态
     */
    state?: "DRAFT" | "OPEN" | "CLOSED";
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
export interface GetIllegalRecordRequest {
  illegalRecordId: string;
}
export interface GetIllegalRecordResponse {
  /**
   * 违法库
   */
  body: {
    /**
     * 过车记录索引号
     */
    thirdId?: string;
    /**
     * 来源
     */
    source?: "GUANGXIN" | "HENGTONG";
    /**
     * 车牌
     */
    plate?: string;
    /**
     * 车牌类型
     */
    plateType?: string;
    /**
     * 车牌类型中文
     */
    plateTypeStr?: string;
    /**
     * 车型
     */
    carType?: string;
    /**
     * 车型中文
     */
    carTypeStr?: string;
    /**
     * 车道编号
     */
    carWayCode?: number;
    /**
     * 车速
     */
    carSpeed?: number;
    /**
     * 车身颜色代码
     */
    carColor?: string;
    /**
     * 车身颜色中文
     */
    carColorStr?: string;
    /**
     * 车辆行进方向
     */
    carDirect?: number;
    /**
     * 抓拍相机名称
     */
    channelName?: string;
    /**
     * 抓拍相机通道号
     */
    channelCode?: string;
    /**
     * 卡口名称
     */
    gantryName?: string;
    /**
     * 卡口代码
     */
    gantryCode?: string;
    /**
     * 违法时间
     */
    capTime?: Date;
    /**
     * 过车图片
     */
    carImages?: string[];
    /**
     * 车牌图片
     */
    plateImages?: string[];
    /**
     * 车辆品牌代码
     */
    carBrand?: string;
    /**
     * 车辆品牌中文
     */
    carBrandStr?: string;
    /**
     * 违法代码
     */
    name?: string;
    /**
     * 违法简称
     */
    shortName?: string;
    /**
     * 违法名称
     */
    code?: string;
    /**
     * 违法类型
     */
    type?: string;
    /**
     * 违法地点
     */
    place?: string;
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
    /**
     * 这条违法过期的时间
     */
    expiredAt?: Date;
    /**
     * 状态
     */
    state?: "DRAFT" | "OPEN" | "CLOSED";
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
export interface UpdateIllegalRecordRequest {
  illegalRecordId: string;
  /**
   * 违法记录详情
   */
  body: {
    /**
     * 过车记录索引号
     */
    thirdId?: string;
    /**
     * 来源
     */
    source?: "GUANGXIN" | "HENGTONG";
    /**
     * 车牌
     */
    plate?: string;
    /**
     * 车牌类型
     */
    plateType?: string;
    /**
     * 车牌类型中文
     */
    plateTypeStr?: string;
    /**
     * 车型
     */
    carType?: string;
    /**
     * 车型中文
     */
    carTypeStr?: string;
    /**
     * 车道编号
     */
    carWayCode?: number;
    /**
     * 车速
     */
    carSpeed?: number;
    /**
     * 车身颜色代码
     */
    carColor?: string;
    /**
     * 车身颜色中文
     */
    carColorStr?: string;
    /**
     * 车辆行进方向
     */
    carDirect?: number;
    /**
     * 抓拍相机名称
     */
    channelName?: string;
    /**
     * 抓拍相机通道号
     */
    channelCode?: string;
    /**
     * 卡口名称
     */
    gantryName?: string;
    /**
     * 卡口代码
     */
    gantryCode?: string;
    /**
     * 违法时间
     */
    capTime?: Date;
    /**
     * 过车图片
     */
    carImages?: string[];
    /**
     * 车牌图片
     */
    plateImages?: string[];
    /**
     * 车辆品牌代码
     */
    carBrand?: string;
    /**
     * 车辆品牌中文
     */
    carBrandStr?: string;
    /**
     * 违法代码
     */
    name?: string;
    /**
     * 违法简称
     */
    shortName?: string;
    /**
     * 违法名称
     */
    code?: string;
    /**
     * 违法类型
     */
    type?: string;
    /**
     * 违法地点
     */
    place?: string;
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
    /**
     * 这条违法过期的时间
     */
    expiredAt?: Date;
    /**
     * 状态
     */
    state?: "DRAFT" | "OPEN" | "CLOSED";
  };
}
export interface UpdateIllegalRecordResponse {
  /**
   * 违法库
   */
  body: {
    /**
     * 过车记录索引号
     */
    thirdId?: string;
    /**
     * 来源
     */
    source?: "GUANGXIN" | "HENGTONG";
    /**
     * 车牌
     */
    plate?: string;
    /**
     * 车牌类型
     */
    plateType?: string;
    /**
     * 车牌类型中文
     */
    plateTypeStr?: string;
    /**
     * 车型
     */
    carType?: string;
    /**
     * 车型中文
     */
    carTypeStr?: string;
    /**
     * 车道编号
     */
    carWayCode?: number;
    /**
     * 车速
     */
    carSpeed?: number;
    /**
     * 车身颜色代码
     */
    carColor?: string;
    /**
     * 车身颜色中文
     */
    carColorStr?: string;
    /**
     * 车辆行进方向
     */
    carDirect?: number;
    /**
     * 抓拍相机名称
     */
    channelName?: string;
    /**
     * 抓拍相机通道号
     */
    channelCode?: string;
    /**
     * 卡口名称
     */
    gantryName?: string;
    /**
     * 卡口代码
     */
    gantryCode?: string;
    /**
     * 违法时间
     */
    capTime?: Date;
    /**
     * 过车图片
     */
    carImages?: string[];
    /**
     * 车牌图片
     */
    plateImages?: string[];
    /**
     * 车辆品牌代码
     */
    carBrand?: string;
    /**
     * 车辆品牌中文
     */
    carBrandStr?: string;
    /**
     * 违法代码
     */
    name?: string;
    /**
     * 违法简称
     */
    shortName?: string;
    /**
     * 违法名称
     */
    code?: string;
    /**
     * 违法类型
     */
    type?: string;
    /**
     * 违法地点
     */
    place?: string;
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
    /**
     * 这条违法过期的时间
     */
    expiredAt?: Date;
    /**
     * 状态
     */
    state?: "DRAFT" | "OPEN" | "CLOSED";
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
export interface DeleteIllegalRecordRequest {
  illegalRecordId: string;
}
export interface ListIllegalTypesRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string[];
    name_like?: string;
    level?: number;
    code?: string[];
  };
}
export interface ListIllegalTypesResponse {
  body: ({
    /**
     * 违法名称
     */
    name?: string;
    /**
     * 违法简称
     */
    shortName?: string;
    /**
     * 违法类型
     */
    type?: string;
    /**
     * 违法代码
     */
    code?: string;
    /**
     * 等级
     */
    level?: number;
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
     * 违法名称
     */
    name: string;
    /**
     * 违法简称
     */
    shortName?: string;
    /**
     * 违法类型
     */
    type?: string;
    /**
     * 违法代码
     */
    code: string;
    /**
     * 等级
     */
    level: number;
  };
}
export interface CreateIllegalTypeResponse {
  /**
   * 违法类型
   */
  body: {
    /**
     * 违法名称
     */
    name?: string;
    /**
     * 违法简称
     */
    shortName?: string;
    /**
     * 违法类型
     */
    type?: string;
    /**
     * 违法代码
     */
    code?: string;
    /**
     * 等级
     */
    level?: number;
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
     * 违法名称
     */
    name?: string;
    /**
     * 违法简称
     */
    shortName?: string;
    /**
     * 违法类型
     */
    type?: string;
    /**
     * 违法代码
     */
    code?: string;
    /**
     * 等级
     */
    level?: number;
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
     * 违法名称
     */
    name?: string;
    /**
     * 违法简称
     */
    shortName?: string;
    /**
     * 违法类型
     */
    type?: string;
    /**
     * 违法代码
     */
    code?: string;
    /**
     * 等级
     */
    level?: number;
  };
}
export interface UpdateIllegalTypeResponse {
  /**
   * 违法类型
   */
  body: {
    /**
     * 违法名称
     */
    name?: string;
    /**
     * 违法简称
     */
    shortName?: string;
    /**
     * 违法类型
     */
    type?: string;
    /**
     * 违法代码
     */
    code?: string;
    /**
     * 等级
     */
    level?: number;
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
export interface ListGantryDevicesRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string[];
    name_like?: string;
    gantry?: string[];
  };
}
export interface ListGantryDevicesResponse {
  body: ({
    /**
     * 所属卡口 id
     */
    gantry?: string;
    /**
     * 设备名称
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
export interface CreateGantryDeviceRequest {
  /**
   * 创建卡口设备详情
   */
  body: {
    /**
     * 所属卡口 id
     */
    gantry: string;
    /**
     * 设备名称
     */
    name?: string;
    /**
     * 设备编码
     */
    code: string;
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
  };
}
export interface CreateGantryDeviceResponse {
  /**
   * 卡口设备
   */
  body: {
    /**
     * 所属卡口 id
     */
    gantry?: string;
    /**
     * 设备名称
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
export interface GetGantryDeviceRequest {
  gantryDeviceId: string;
}
export interface GetGantryDeviceResponse {
  /**
   * 卡口设备
   */
  body: {
    /**
     * 所属卡口 id
     */
    gantry?: string;
    /**
     * 设备名称
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
export interface UpdateGantryDeviceRequest {
  gantryDeviceId: string;
  /**
   * 卡口设备
   */
  body: {
    /**
     * 所属卡口 id
     */
    gantry?: string;
    /**
     * 设备名称
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
  };
}
export interface UpdateGantryDeviceResponse {
  /**
   * 卡口设备
   */
  body: {
    /**
     * 所属卡口 id
     */
    gantry?: string;
    /**
     * 设备名称
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
export interface DeleteGantryDeviceRequest {
  gantryDeviceId: string;
}
export interface ListGantriesRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string[];
    name_like?: string;
    state?: ("ONLINE" | "OFFLINE")[];
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
    plate?: string[];
    plate_like?: string;
    thirdId?: string[];
    carType?: string[];
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
     * 车牌类型
     */
    plateType?: string;
    /**
     * 车牌类型中文
     */
    plateTypeStr?: string;
    /**
     * 过车类型
     */
    carType?: string;
    /**
     * 过车类型中文
     */
    carTypeStr?: string;
    /**
     * 过车车道编号
     */
    carWayCode?: number;
    /**
     * 过车车速
     */
    carSpeed?: number;
    /**
     * 车身颜色代码
     */
    carColor?: string;
    /**
     * 车身颜色中文
     */
    carColorStr?: string;
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
     * 卡口名称
     */
    gantryName?: string;
    /**
     * 卡口代码
     */
    gantryCode?: string;
    /**
     * 过车数据时间戳
     */
    capTime?: Date;
    /**
     * 过车数据过车图片
     */
    carImages?: string[];
    /**
     * 过车数据车牌图片
     */
    plateImages?: string[];
    /**
     * 车辆品牌代码
     */
    carBrand?: string;
    /**
     * 车辆品牌中文
     */
    carBrandStr?: string;
    /**
     * 抓拍地点
     */
    place?: string;
    /**
     * 过车经度
     */
    lng?: number;
    /**
     * 过车纬度
     */
    lat?: number;
    /**
     * 过车数据所属部门
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
     * 车牌类型
     */
    plateType?: string;
    /**
     * 车牌类型中文
     */
    plateTypeStr?: string;
    /**
     * 过车类型
     */
    carType?: string;
    /**
     * 过车类型中文
     */
    carTypeStr?: string;
    /**
     * 过车车道编号
     */
    carWayCode?: number;
    /**
     * 过车车速
     */
    carSpeed?: number;
    /**
     * 车身颜色代码
     */
    carColor?: string;
    /**
     * 车身颜色中文
     */
    carColorStr?: string;
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
     * 卡口名称
     */
    gantryName?: string;
    /**
     * 卡口代码
     */
    gantryCode?: string;
    /**
     * 过车数据时间戳
     */
    capTime: Date;
    /**
     * 过车数据过车图片
     */
    carImages?: string[];
    /**
     * 过车数据车牌图片
     */
    plateImages?: string[];
    /**
     * 车辆品牌代码
     */
    carBrand?: string;
    /**
     * 车辆品牌中文
     */
    carBrandStr?: string;
    /**
     * 抓拍地点
     */
    place?: string;
    /**
     * 过车经度
     */
    lng?: number;
    /**
     * 过车纬度
     */
    lat?: number;
    /**
     * 过车数据所属部门
     */
    deptId?: string;
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
     * 车牌类型
     */
    plateType?: string;
    /**
     * 车牌类型中文
     */
    plateTypeStr?: string;
    /**
     * 过车类型
     */
    carType?: string;
    /**
     * 过车类型中文
     */
    carTypeStr?: string;
    /**
     * 过车车道编号
     */
    carWayCode?: number;
    /**
     * 过车车速
     */
    carSpeed?: number;
    /**
     * 车身颜色代码
     */
    carColor?: string;
    /**
     * 车身颜色中文
     */
    carColorStr?: string;
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
     * 卡口名称
     */
    gantryName?: string;
    /**
     * 卡口代码
     */
    gantryCode?: string;
    /**
     * 过车数据时间戳
     */
    capTime?: Date;
    /**
     * 过车数据过车图片
     */
    carImages?: string[];
    /**
     * 过车数据车牌图片
     */
    plateImages?: string[];
    /**
     * 车辆品牌代码
     */
    carBrand?: string;
    /**
     * 车辆品牌中文
     */
    carBrandStr?: string;
    /**
     * 抓拍地点
     */
    place?: string;
    /**
     * 过车经度
     */
    lng?: number;
    /**
     * 过车纬度
     */
    lat?: number;
    /**
     * 过车数据所属部门
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
     * 车牌类型
     */
    plateType?: string;
    /**
     * 车牌类型中文
     */
    plateTypeStr?: string;
    /**
     * 过车类型
     */
    carType?: string;
    /**
     * 过车类型中文
     */
    carTypeStr?: string;
    /**
     * 过车车道编号
     */
    carWayCode?: number;
    /**
     * 过车车速
     */
    carSpeed?: number;
    /**
     * 车身颜色代码
     */
    carColor?: string;
    /**
     * 车身颜色中文
     */
    carColorStr?: string;
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
     * 卡口名称
     */
    gantryName?: string;
    /**
     * 卡口代码
     */
    gantryCode?: string;
    /**
     * 过车数据时间戳
     */
    capTime?: Date;
    /**
     * 过车数据过车图片
     */
    carImages?: string[];
    /**
     * 过车数据车牌图片
     */
    plateImages?: string[];
    /**
     * 车辆品牌代码
     */
    carBrand?: string;
    /**
     * 车辆品牌中文
     */
    carBrandStr?: string;
    /**
     * 抓拍地点
     */
    place?: string;
    /**
     * 过车经度
     */
    lng?: number;
    /**
     * 过车纬度
     */
    lat?: number;
    /**
     * 过车数据所属部门
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
     * 车牌类型
     */
    plateType?: string;
    /**
     * 车牌类型中文
     */
    plateTypeStr?: string;
    /**
     * 过车类型
     */
    carType?: string;
    /**
     * 过车类型中文
     */
    carTypeStr?: string;
    /**
     * 过车车道编号
     */
    carWayCode?: number;
    /**
     * 过车车速
     */
    carSpeed?: number;
    /**
     * 车身颜色代码
     */
    carColor?: string;
    /**
     * 车身颜色中文
     */
    carColorStr?: string;
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
     * 卡口名称
     */
    gantryName?: string;
    /**
     * 卡口代码
     */
    gantryCode?: string;
    /**
     * 过车数据时间戳
     */
    capTime?: Date;
    /**
     * 过车数据过车图片
     */
    carImages?: string[];
    /**
     * 过车数据车牌图片
     */
    plateImages?: string[];
    /**
     * 车辆品牌代码
     */
    carBrand?: string;
    /**
     * 车辆品牌中文
     */
    carBrandStr?: string;
    /**
     * 抓拍地点
     */
    place?: string;
    /**
     * 过车经度
     */
    lng?: number;
    /**
     * 过车纬度
     */
    lat?: number;
    /**
     * 过车数据所属部门
     */
    deptId?: string;
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
     * 车牌类型
     */
    plateType?: string;
    /**
     * 车牌类型中文
     */
    plateTypeStr?: string;
    /**
     * 过车类型
     */
    carType?: string;
    /**
     * 过车类型中文
     */
    carTypeStr?: string;
    /**
     * 过车车道编号
     */
    carWayCode?: number;
    /**
     * 过车车速
     */
    carSpeed?: number;
    /**
     * 车身颜色代码
     */
    carColor?: string;
    /**
     * 车身颜色中文
     */
    carColorStr?: string;
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
     * 卡口名称
     */
    gantryName?: string;
    /**
     * 卡口代码
     */
    gantryCode?: string;
    /**
     * 过车数据时间戳
     */
    capTime?: Date;
    /**
     * 过车数据过车图片
     */
    carImages?: string[];
    /**
     * 过车数据车牌图片
     */
    plateImages?: string[];
    /**
     * 车辆品牌代码
     */
    carBrand?: string;
    /**
     * 车辆品牌中文
     */
    carBrandStr?: string;
    /**
     * 抓拍地点
     */
    place?: string;
    /**
     * 过车经度
     */
    lng?: number;
    /**
     * 过车纬度
     */
    lat?: number;
    /**
     * 过车数据所属部门
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
export interface DeleteTrackRecordRequest {
  trackRecordId: string;
}
export interface ListWarningsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string[];
    plate?: string[];
    plate_like?: string;
    name_like?: string;
    place_like?: string;
    type?: string;
    level?: number;
    gantry?: string[];
  };
}
export interface ListWarningsResponse {
  body: ({
    /**
     * 预警名称
     */
    name?: string;
    /**
     * 预警所属的类型，目前直接同违法类型
     */
    type?: string;
    /**
     * 预警车牌
     */
    plate?: string;
    /**
     * 违法记录 Id
     */
    illegal?: string;
    /**
     * 预警等级
     */
    level?: number;
    /**
     * 最近一次经过卡口 Id
     */
    gantry?: string;
    /**
     * 最后一次发生地点
     */
    place?: string;
    /**
     * 最近一次经过卡口时间
     */
    capTime?: Date;
    /**
     * 过车图片
     */
    carImages?: string[];
    /**
     * 车牌图片
     */
    plateImages?: string[];
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
export interface CreateWarningRequest {
  /**
   * 创建过车数据详情
   */
  body: {
    /**
     * 预警名称
     */
    name?: string;
    /**
     * 预警所属的类型，目前直接同违法类型
     */
    type?: string;
    /**
     * 预警车牌
     */
    plate: string;
    /**
     * 违法记录 Id
     */
    illegal?: string;
    /**
     * 预警等级
     */
    level?: number;
    /**
     * 最近一次经过卡口 Id
     */
    gantry?: string;
    /**
     * 最后一次发生地点
     */
    place?: string;
    /**
     * 最近一次经过卡口时间
     */
    capTime: Date;
    /**
     * 过车图片
     */
    carImages?: string[];
    /**
     * 车牌图片
     */
    plateImages?: string[];
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
export interface CreateWarningResponse {
  /**
   * 预警数据详情
   */
  body: {
    /**
     * 预警名称
     */
    name?: string;
    /**
     * 预警所属的类型，目前直接同违法类型
     */
    type?: string;
    /**
     * 预警车牌
     */
    plate?: string;
    /**
     * 违法记录 Id
     */
    illegal?: string;
    /**
     * 预警等级
     */
    level?: number;
    /**
     * 最近一次经过卡口 Id
     */
    gantry?: string;
    /**
     * 最后一次发生地点
     */
    place?: string;
    /**
     * 最近一次经过卡口时间
     */
    capTime?: Date;
    /**
     * 过车图片
     */
    carImages?: string[];
    /**
     * 车牌图片
     */
    plateImages?: string[];
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
export interface GetWarningRequest {
  warningId: string;
}
export interface GetWarningResponse {
  /**
   * 预警数据详情
   */
  body: {
    /**
     * 预警名称
     */
    name?: string;
    /**
     * 预警所属的类型，目前直接同违法类型
     */
    type?: string;
    /**
     * 预警车牌
     */
    plate?: string;
    /**
     * 违法记录 Id
     */
    illegal?: string;
    /**
     * 预警等级
     */
    level?: number;
    /**
     * 最近一次经过卡口 Id
     */
    gantry?: string;
    /**
     * 最后一次发生地点
     */
    place?: string;
    /**
     * 最近一次经过卡口时间
     */
    capTime?: Date;
    /**
     * 过车图片
     */
    carImages?: string[];
    /**
     * 车牌图片
     */
    plateImages?: string[];
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
export interface UpdateWarningRequest {
  warningId: string;
  /**
   * 预警数据详情
   */
  body: {
    /**
     * 预警名称
     */
    name?: string;
    /**
     * 预警所属的类型，目前直接同违法类型
     */
    type?: string;
    /**
     * 预警车牌
     */
    plate?: string;
    /**
     * 违法记录 Id
     */
    illegal?: string;
    /**
     * 预警等级
     */
    level?: number;
    /**
     * 最近一次经过卡口 Id
     */
    gantry?: string;
    /**
     * 最后一次发生地点
     */
    place?: string;
    /**
     * 最近一次经过卡口时间
     */
    capTime?: Date;
    /**
     * 过车图片
     */
    carImages?: string[];
    /**
     * 车牌图片
     */
    plateImages?: string[];
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
export interface UpdateWarningResponse {
  /**
   * 预警数据详情
   */
  body: {
    /**
     * 预警名称
     */
    name?: string;
    /**
     * 预警所属的类型，目前直接同违法类型
     */
    type?: string;
    /**
     * 预警车牌
     */
    plate?: string;
    /**
     * 违法记录 Id
     */
    illegal?: string;
    /**
     * 预警等级
     */
    level?: number;
    /**
     * 最近一次经过卡口 Id
     */
    gantry?: string;
    /**
     * 最后一次发生地点
     */
    place?: string;
    /**
     * 最近一次经过卡口时间
     */
    capTime?: Date;
    /**
     * 过车图片
     */
    carImages?: string[];
    /**
     * 车牌图片
     */
    plateImages?: string[];
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
export interface DeleteWarningRequest {
  warningId: string;
}
export interface GetSettingsResponse {
  /**
   * 系统设置
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
   * 系统设置 Doc
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
   * 系统设置
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

export type IllegalRecordState = "DRAFT" | "OPEN" | "CLOSED";

/**
 * 违法记录详情
 */
export interface IllegalRecordDoc {
  /**
   * 过车记录索引号
   */
  thirdId?: string;
  /**
   * 来源
   */
  source?: "GUANGXIN" | "HENGTONG";
  /**
   * 车牌
   */
  plate?: string;
  /**
   * 车牌类型
   */
  plateType?: string;
  /**
   * 车牌类型中文
   */
  plateTypeStr?: string;
  /**
   * 车型
   */
  carType?: string;
  /**
   * 车型中文
   */
  carTypeStr?: string;
  /**
   * 车道编号
   */
  carWayCode?: number;
  /**
   * 车速
   */
  carSpeed?: number;
  /**
   * 车身颜色代码
   */
  carColor?: string;
  /**
   * 车身颜色中文
   */
  carColorStr?: string;
  /**
   * 车辆行进方向
   */
  carDirect?: number;
  /**
   * 抓拍相机名称
   */
  channelName?: string;
  /**
   * 抓拍相机通道号
   */
  channelCode?: string;
  /**
   * 卡口名称
   */
  gantryName?: string;
  /**
   * 卡口代码
   */
  gantryCode?: string;
  /**
   * 违法时间
   */
  capTime?: Date;
  /**
   * 过车图片
   */
  carImages?: string[];
  /**
   * 车牌图片
   */
  plateImages?: string[];
  /**
   * 车辆品牌代码
   */
  carBrand?: string;
  /**
   * 车辆品牌中文
   */
  carBrandStr?: string;
  /**
   * 违法代码
   */
  name?: string;
  /**
   * 违法简称
   */
  shortName?: string;
  /**
   * 违法名称
   */
  code?: string;
  /**
   * 违法类型
   */
  type?: string;
  /**
   * 违法地点
   */
  place?: string;
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
  /**
   * 这条违法过期的时间
   */
  expiredAt?: Date;
  /**
   * 状态
   */
  state?: "DRAFT" | "OPEN" | "CLOSED";
}

/**
 * 创建违法记录
 */
export interface IllegalRecordCreateBody {
  /**
   * 过车记录索引号
   */
  thirdId?: string;
  /**
   * 来源
   */
  source?: "GUANGXIN" | "HENGTONG";
  /**
   * 车牌
   */
  plate: string;
  /**
   * 车牌类型
   */
  plateType?: string;
  /**
   * 车牌类型中文
   */
  plateTypeStr?: string;
  /**
   * 车型
   */
  carType?: string;
  /**
   * 车型中文
   */
  carTypeStr?: string;
  /**
   * 车道编号
   */
  carWayCode?: number;
  /**
   * 车速
   */
  carSpeed?: number;
  /**
   * 车身颜色代码
   */
  carColor?: string;
  /**
   * 车身颜色中文
   */
  carColorStr?: string;
  /**
   * 车辆行进方向
   */
  carDirect?: number;
  /**
   * 抓拍相机名称
   */
  channelName?: string;
  /**
   * 抓拍相机通道号
   */
  channelCode?: string;
  /**
   * 卡口名称
   */
  gantryName?: string;
  /**
   * 卡口代码
   */
  gantryCode?: string;
  /**
   * 违法时间
   */
  capTime: Date;
  /**
   * 过车图片
   */
  carImages?: string[];
  /**
   * 车牌图片
   */
  plateImages?: string[];
  /**
   * 车辆品牌代码
   */
  carBrand?: string;
  /**
   * 车辆品牌中文
   */
  carBrandStr?: string;
  /**
   * 违法代码
   */
  name?: string;
  /**
   * 违法简称
   */
  shortName?: string;
  /**
   * 违法名称
   */
  code: string;
  /**
   * 违法类型
   */
  type: string;
  /**
   * 违法地点
   */
  place: string;
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
  /**
   * 这条违法过期的时间
   */
  expiredAt?: Date;
  /**
   * 状态
   */
  state?: "DRAFT" | "OPEN" | "CLOSED";
}

/**
 * 违法库
 */
export type IllegalRecord = {
  /**
   * 过车记录索引号
   */
  thirdId?: string;
  /**
   * 来源
   */
  source?: "GUANGXIN" | "HENGTONG";
  /**
   * 车牌
   */
  plate?: string;
  /**
   * 车牌类型
   */
  plateType?: string;
  /**
   * 车牌类型中文
   */
  plateTypeStr?: string;
  /**
   * 车型
   */
  carType?: string;
  /**
   * 车型中文
   */
  carTypeStr?: string;
  /**
   * 车道编号
   */
  carWayCode?: number;
  /**
   * 车速
   */
  carSpeed?: number;
  /**
   * 车身颜色代码
   */
  carColor?: string;
  /**
   * 车身颜色中文
   */
  carColorStr?: string;
  /**
   * 车辆行进方向
   */
  carDirect?: number;
  /**
   * 抓拍相机名称
   */
  channelName?: string;
  /**
   * 抓拍相机通道号
   */
  channelCode?: string;
  /**
   * 卡口名称
   */
  gantryName?: string;
  /**
   * 卡口代码
   */
  gantryCode?: string;
  /**
   * 违法时间
   */
  capTime?: Date;
  /**
   * 过车图片
   */
  carImages?: string[];
  /**
   * 车牌图片
   */
  plateImages?: string[];
  /**
   * 车辆品牌代码
   */
  carBrand?: string;
  /**
   * 车辆品牌中文
   */
  carBrandStr?: string;
  /**
   * 违法代码
   */
  name?: string;
  /**
   * 违法简称
   */
  shortName?: string;
  /**
   * 违法名称
   */
  code?: string;
  /**
   * 违法类型
   */
  type?: string;
  /**
   * 违法地点
   */
  place?: string;
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
  /**
   * 这条违法过期的时间
   */
  expiredAt?: Date;
  /**
   * 状态
   */
  state?: "DRAFT" | "OPEN" | "CLOSED";
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
   * 违法名称
   */
  name?: string;
  /**
   * 违法简称
   */
  shortName?: string;
  /**
   * 违法类型
   */
  type?: string;
  /**
   * 违法代码
   */
  code?: string;
  /**
   * 等级
   */
  level?: number;
}

/**
 * 创建违法库类型Body
 */
export interface IllegalTypeCreateBody {
  /**
   * 违法名称
   */
  name: string;
  /**
   * 违法简称
   */
  shortName?: string;
  /**
   * 违法类型
   */
  type?: string;
  /**
   * 违法代码
   */
  code: string;
  /**
   * 等级
   */
  level: number;
}

/**
 * 违法类型
 */
export type IllegalType = {
  /**
   * 违法名称
   */
  name?: string;
  /**
   * 违法简称
   */
  shortName?: string;
  /**
   * 违法类型
   */
  type?: string;
  /**
   * 违法代码
   */
  code?: string;
  /**
   * 等级
   */
  level?: number;
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
 * 系统设置 Doc
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
 * 系统设置
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
 * 卡口设备
 */
export interface GantryDeviceDoc {
  /**
   * 所属卡口 id
   */
  gantry?: string;
  /**
   * 设备名称
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
 * 创建卡口设备详情
 */
export interface GantryDeviceCreateBody {
  /**
   * 所属卡口 id
   */
  gantry: string;
  /**
   * 设备名称
   */
  name?: string;
  /**
   * 设备编码
   */
  code: string;
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
 * 卡口设备
 */
export type GantryDevice = {
  /**
   * 所属卡口 id
   */
  gantry?: string;
  /**
   * 设备名称
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
 * 卡口设备类型分类
 */
export type GantryType = "CAMERA";

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
   * 车牌类型
   */
  plateType?: string;
  /**
   * 车牌类型中文
   */
  plateTypeStr?: string;
  /**
   * 过车类型
   */
  carType?: string;
  /**
   * 过车类型中文
   */
  carTypeStr?: string;
  /**
   * 过车车道编号
   */
  carWayCode?: number;
  /**
   * 过车车速
   */
  carSpeed?: number;
  /**
   * 车身颜色代码
   */
  carColor?: string;
  /**
   * 车身颜色中文
   */
  carColorStr?: string;
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
   * 卡口名称
   */
  gantryName?: string;
  /**
   * 卡口代码
   */
  gantryCode?: string;
  /**
   * 过车数据时间戳
   */
  capTime?: Date;
  /**
   * 过车数据过车图片
   */
  carImages?: string[];
  /**
   * 过车数据车牌图片
   */
  plateImages?: string[];
  /**
   * 车辆品牌代码
   */
  carBrand?: string;
  /**
   * 车辆品牌中文
   */
  carBrandStr?: string;
  /**
   * 抓拍地点
   */
  place?: string;
  /**
   * 过车经度
   */
  lng?: number;
  /**
   * 过车纬度
   */
  lat?: number;
  /**
   * 过车数据所属部门
   */
  deptId?: string;
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
   * 车牌类型
   */
  plateType?: string;
  /**
   * 车牌类型中文
   */
  plateTypeStr?: string;
  /**
   * 过车类型
   */
  carType?: string;
  /**
   * 过车类型中文
   */
  carTypeStr?: string;
  /**
   * 过车车道编号
   */
  carWayCode?: number;
  /**
   * 过车车速
   */
  carSpeed?: number;
  /**
   * 车身颜色代码
   */
  carColor?: string;
  /**
   * 车身颜色中文
   */
  carColorStr?: string;
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
   * 卡口名称
   */
  gantryName?: string;
  /**
   * 卡口代码
   */
  gantryCode?: string;
  /**
   * 过车数据时间戳
   */
  capTime: Date;
  /**
   * 过车数据过车图片
   */
  carImages?: string[];
  /**
   * 过车数据车牌图片
   */
  plateImages?: string[];
  /**
   * 车辆品牌代码
   */
  carBrand?: string;
  /**
   * 车辆品牌中文
   */
  carBrandStr?: string;
  /**
   * 抓拍地点
   */
  place?: string;
  /**
   * 过车经度
   */
  lng?: number;
  /**
   * 过车纬度
   */
  lat?: number;
  /**
   * 过车数据所属部门
   */
  deptId?: string;
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
   * 车牌类型
   */
  plateType?: string;
  /**
   * 车牌类型中文
   */
  plateTypeStr?: string;
  /**
   * 过车类型
   */
  carType?: string;
  /**
   * 过车类型中文
   */
  carTypeStr?: string;
  /**
   * 过车车道编号
   */
  carWayCode?: number;
  /**
   * 过车车速
   */
  carSpeed?: number;
  /**
   * 车身颜色代码
   */
  carColor?: string;
  /**
   * 车身颜色中文
   */
  carColorStr?: string;
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
   * 卡口名称
   */
  gantryName?: string;
  /**
   * 卡口代码
   */
  gantryCode?: string;
  /**
   * 过车数据时间戳
   */
  capTime?: Date;
  /**
   * 过车数据过车图片
   */
  carImages?: string[];
  /**
   * 过车数据车牌图片
   */
  plateImages?: string[];
  /**
   * 车辆品牌代码
   */
  carBrand?: string;
  /**
   * 车辆品牌中文
   */
  carBrandStr?: string;
  /**
   * 抓拍地点
   */
  place?: string;
  /**
   * 过车经度
   */
  lng?: number;
  /**
   * 过车纬度
   */
  lat?: number;
  /**
   * 过车数据所属部门
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
 * 预警数据详情
 */
export interface WarningDoc {
  /**
   * 预警名称
   */
  name?: string;
  /**
   * 预警所属的类型，目前直接同违法类型
   */
  type?: string;
  /**
   * 预警车牌
   */
  plate?: string;
  /**
   * 违法记录 Id
   */
  illegal?: string;
  /**
   * 预警等级
   */
  level?: number;
  /**
   * 最近一次经过卡口 Id
   */
  gantry?: string;
  /**
   * 最后一次发生地点
   */
  place?: string;
  /**
   * 最近一次经过卡口时间
   */
  capTime?: Date;
  /**
   * 过车图片
   */
  carImages?: string[];
  /**
   * 车牌图片
   */
  plateImages?: string[];
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
 * 创建过车数据详情
 */
export interface WarningCreateBody {
  /**
   * 预警名称
   */
  name?: string;
  /**
   * 预警所属的类型，目前直接同违法类型
   */
  type?: string;
  /**
   * 预警车牌
   */
  plate: string;
  /**
   * 违法记录 Id
   */
  illegal?: string;
  /**
   * 预警等级
   */
  level?: number;
  /**
   * 最近一次经过卡口 Id
   */
  gantry?: string;
  /**
   * 最后一次发生地点
   */
  place?: string;
  /**
   * 最近一次经过卡口时间
   */
  capTime: Date;
  /**
   * 过车图片
   */
  carImages?: string[];
  /**
   * 车牌图片
   */
  plateImages?: string[];
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
 * 预警数据详情
 */
export type Warning = {
  /**
   * 预警名称
   */
  name?: string;
  /**
   * 预警所属的类型，目前直接同违法类型
   */
  type?: string;
  /**
   * 预警车牌
   */
  plate?: string;
  /**
   * 违法记录 Id
   */
  illegal?: string;
  /**
   * 预警等级
   */
  level?: number;
  /**
   * 最近一次经过卡口 Id
   */
  gantry?: string;
  /**
   * 最后一次发生地点
   */
  place?: string;
  /**
   * 最近一次经过卡口时间
   */
  capTime?: Date;
  /**
   * 过车图片
   */
  carImages?: string[];
  /**
   * 车牌图片
   */
  plateImages?: string[];
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
