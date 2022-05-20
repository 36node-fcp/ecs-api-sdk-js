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
  lawEnforcePoint: LawEnforcePointAPI;
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
  /**
   * Get illegal record counts
   */
  getIllegalRecordCounts(
    req: GetIllegalRecordCountsRequest
  ): Promise<GetIllegalRecordCountsResponse>;
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
   * List whitelists
   */
  listWhitelists(req: ListWhitelistsRequest): Promise<ListWhitelistsResponse>;
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
  /**
   * Get track record counts
   */
  getTrackRecordCounts(req: GetTrackRecordCountsRequest): Promise<GetTrackRecordCountsResponse>;
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
  /**
   * close an open warning
   */
  closeWarning(req: CloseWarningRequest): Promise<CloseWarningResponse>;
  /**
   * Get warning counts
   */
  getWarningCounts(req: GetWarningCountsRequest): Promise<GetWarningCountsResponse>;
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
export interface LawEnforcePointAPI {
  /**
   * List lawEnforcePoints
   */
  listLawEnforcePoints(req: ListLawEnforcePointsRequest): Promise<ListLawEnforcePointsResponse>;
  /**
   * Create a lawEnforcePoint
   */
  createLawEnforcePoint(req: CreateLawEnforcePointRequest): Promise<CreateLawEnforcePointResponse>;
  /**
   * Find lawEnforcePoint by id
   */
  getLawEnforcePoint(req: GetLawEnforcePointRequest): Promise<GetLawEnforcePointResponse>;
  /**
   * Update lawEnforcePoint device
   */
  updateLawEnforcePoint(req: UpdateLawEnforcePointRequest): Promise<UpdateLawEnforcePointResponse>;
  /**
   * Delete lawEnforcePoint
   */
  deleteLawEnforcePoint(req: DeleteLawEnforcePointRequest): Promise<void>;
}

export interface ListIllegalRecordsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string[];
    ns_like?: string;
    plate?: string[];
    code?: string[];
    plate_like?: string;
    state?: ("DRAFT" | "OPEN" | "CLOSED")[];
    capTime_gte?: string;
    capTime_lte?: string;
    createAt_gt?: string;
    expiredAt_gt?: string;
  };
}
export interface ListIllegalRecordsResponse {
  body: ({
    /**
     * 过车记录索引号
     */
    thirdId?: string;
    /**
     * 违法来源
     */
    source?: "GUANGXIN" | "HENGTONG" | "MANUAL" | "ETC";
    /**
     * 所属的部门
     */
    ns?: string;
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
     * 车辆视频
     */
    videos?: string[];
    /**
     * 车辆品牌代码
     */
    carBrand?: string;
    /**
     * 车辆品牌中文
     */
    carBrandStr?: string;
    /**
     * 违法名称
     */
    name?: string;
    /**
     * 违法内容
     */
    content?: string;
    /**
     * 违法代码
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
     * 违法来源
     */
    source?: "GUANGXIN" | "HENGTONG" | "MANUAL" | "ETC";
    /**
     * 所属的部门
     */
    ns?: string;
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
     * 车辆视频
     */
    videos?: string[];
    /**
     * 车辆品牌代码
     */
    carBrand?: string;
    /**
     * 车辆品牌中文
     */
    carBrandStr?: string;
    /**
     * 违法名称
     */
    name?: string;
    /**
     * 违法内容
     */
    content?: string;
    /**
     * 违法代码
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
     * 违法来源
     */
    source?: "GUANGXIN" | "HENGTONG" | "MANUAL" | "ETC";
    /**
     * 所属的部门
     */
    ns?: string;
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
     * 车辆视频
     */
    videos?: string[];
    /**
     * 车辆品牌代码
     */
    carBrand?: string;
    /**
     * 车辆品牌中文
     */
    carBrandStr?: string;
    /**
     * 违法名称
     */
    name?: string;
    /**
     * 违法内容
     */
    content?: string;
    /**
     * 违法代码
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
     * 违法来源
     */
    source?: "GUANGXIN" | "HENGTONG" | "MANUAL" | "ETC";
    /**
     * 所属的部门
     */
    ns?: string;
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
     * 车辆视频
     */
    videos?: string[];
    /**
     * 车辆品牌代码
     */
    carBrand?: string;
    /**
     * 车辆品牌中文
     */
    carBrandStr?: string;
    /**
     * 违法名称
     */
    name?: string;
    /**
     * 违法内容
     */
    content?: string;
    /**
     * 违法代码
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
     * 违法来源
     */
    source?: "GUANGXIN" | "HENGTONG" | "MANUAL" | "ETC";
    /**
     * 所属的部门
     */
    ns?: string;
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
     * 车辆视频
     */
    videos?: string[];
    /**
     * 车辆品牌代码
     */
    carBrand?: string;
    /**
     * 车辆品牌中文
     */
    carBrandStr?: string;
    /**
     * 违法名称
     */
    name?: string;
    /**
     * 违法内容
     */
    content?: string;
    /**
     * 违法代码
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
     * 违法来源
     */
    source?: "GUANGXIN" | "HENGTONG" | "MANUAL" | "ETC";
    /**
     * 所属的部门
     */
    ns?: string;
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
     * 车辆视频
     */
    videos?: string[];
    /**
     * 车辆品牌代码
     */
    carBrand?: string;
    /**
     * 车辆品牌中文
     */
    carBrandStr?: string;
    /**
     * 违法名称
     */
    name?: string;
    /**
     * 违法内容
     */
    content?: string;
    /**
     * 违法代码
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
     * 违法来源
     */
    source?: "GUANGXIN" | "HENGTONG" | "MANUAL" | "ETC";
    /**
     * 所属的部门
     */
    ns?: string;
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
     * 车辆视频
     */
    videos?: string[];
    /**
     * 车辆品牌代码
     */
    carBrand?: string;
    /**
     * 车辆品牌中文
     */
    carBrandStr?: string;
    /**
     * 违法名称
     */
    name?: string;
    /**
     * 违法内容
     */
    content?: string;
    /**
     * 违法代码
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
export interface GetIllegalRecordCountsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    createAt_lt?: string;
    createAt_gt?: string;
    expiredAt_gt?: string;
    expiredAt_lt?: string;
    ns_like?: string;
    _group?: ("createAt" | "gantryCode" | "code" | "type" | "ns")[];
  };
}
export interface GetIllegalRecordCountsResponse {
  body: {
    /**
     * id of count group
     */
    id?: string;
    /**
     * Group of date
     */
    createAt?: {
      /**
       * day of date
       */
      day?: string;
      /**
       * week of date
       */
      week?: string;
      /**
       * month of date
       */
      month?: string;
      /**
       * year of date
       */
      year?: string;
    };
    /**
     * 卡口 id
     */
    gantryCode?: string;
    /**
     * 违法代码
     */
    code?: string;
    /**
     * 违法类型
     */
    type?: string;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 计数
     */
    count?: number;
  }[];
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
     * 违法内容
     */
    content?: string;
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
     * 违法内容
     */
    content?: string;
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
     * 违法内容
     */
    content?: string;
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
     * 违法内容
     */
    content?: string;
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
     * 违法内容
     */
    content?: string;
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
     * 违法内容
     */
    content?: string;
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
    state?: string[];
    protocolType?: ("DAHUA" | "HAIKANG" | "DIRECT")[];
  };
}
export interface ListGantryDevicesResponse {
  body: ({
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 卡口设备唯一识别码
     */
    id?: string;
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
    protocolType?: "DAHUA" | "HAIKANG" | "DIRECT";
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
    /**
     * 限速(千米/小时)
     */
    speedLimit?: number | null;
    /**
     * 设备状态
     */
    state?: "ONLINE" | "OFFLINE";
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
     * 卡口设备唯一识别码
     */
    id: string;
    /**
     * 所属卡口 id
     */
    gantry?: string;
    /**
     * 设备名称
     */
    name: string;
    /**
     * 设备编码
     */
    code?: string;
    /**
     * 协议类型
     */
    protocolType?: "DAHUA" | "HAIKANG" | "DIRECT";
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
    /**
     * 限速(千米/小时)
     */
    speedLimit?: number | null;
    /**
     * 设备状态
     */
    state?: "ONLINE" | "OFFLINE";
  };
}
export interface CreateGantryDeviceResponse {
  /**
   * 卡口设备
   */
  body: {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 卡口设备唯一识别码
     */
    id?: string;
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
    protocolType?: "DAHUA" | "HAIKANG" | "DIRECT";
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
    /**
     * 限速(千米/小时)
     */
    speedLimit?: number | null;
    /**
     * 设备状态
     */
    state?: "ONLINE" | "OFFLINE";
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
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 卡口设备唯一识别码
     */
    id?: string;
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
    protocolType?: "DAHUA" | "HAIKANG" | "DIRECT";
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
    /**
     * 限速(千米/小时)
     */
    speedLimit?: number | null;
    /**
     * 设备状态
     */
    state?: "ONLINE" | "OFFLINE";
  };
}
export interface UpdateGantryDeviceRequest {
  gantryDeviceId: string;
  /**
   * 卡口设备
   */
  body: {
    /**
     * 卡口设备唯一识别码
     */
    id?: string;
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
    protocolType?: "DAHUA" | "HAIKANG" | "DIRECT";
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
    /**
     * 限速(千米/小时)
     */
    speedLimit?: number | null;
    /**
     * 设备状态
     */
    state?: "ONLINE" | "OFFLINE";
  };
}
export interface UpdateGantryDeviceResponse {
  /**
   * 卡口设备
   */
  body: {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 卡口设备唯一识别码
     */
    id?: string;
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
    protocolType?: "DAHUA" | "HAIKANG" | "DIRECT";
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
    /**
     * 限速(千米/小时)
     */
    speedLimit?: number | null;
    /**
     * 设备状态
     */
    state?: "ONLINE" | "OFFLINE";
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
    ns_like?: string;
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
     * 火星坐标系
     */
    gcj02?: {
      /**
       * 卡口所在经度
       */
      lng?: number;
      /**
       * 卡口所在纬度
       */
      lat?: number;
    };
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
    attr?: "MAINLINE" | "INTERCITY" | "SVCRAMP" | "EXPORTRAMP" | "HUBRAMP";
    /**
     * 卡口状态
     */
    state?: "ONLINE" | "OFFLINE";
    /**
     * 所属执法点 id
     */
    lawEnforcePoint?: string;
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
     * 火星坐标系
     */
    gcj02?: {
      /**
       * 卡口所在经度
       */
      lng?: number;
      /**
       * 卡口所在纬度
       */
      lat?: number;
    };
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
    attr: "MAINLINE" | "INTERCITY" | "SVCRAMP" | "EXPORTRAMP" | "HUBRAMP";
    /**
     * 卡口状态
     */
    state?: "ONLINE" | "OFFLINE";
    /**
     * 所属执法点 id
     */
    lawEnforcePoint?: string;
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
     * 火星坐标系
     */
    gcj02?: {
      /**
       * 卡口所在经度
       */
      lng?: number;
      /**
       * 卡口所在纬度
       */
      lat?: number;
    };
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
    attr?: "MAINLINE" | "INTERCITY" | "SVCRAMP" | "EXPORTRAMP" | "HUBRAMP";
    /**
     * 卡口状态
     */
    state?: "ONLINE" | "OFFLINE";
    /**
     * 所属执法点 id
     */
    lawEnforcePoint?: string;
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
     * 火星坐标系
     */
    gcj02?: {
      /**
       * 卡口所在经度
       */
      lng?: number;
      /**
       * 卡口所在纬度
       */
      lat?: number;
    };
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
    attr?: "MAINLINE" | "INTERCITY" | "SVCRAMP" | "EXPORTRAMP" | "HUBRAMP";
    /**
     * 卡口状态
     */
    state?: "ONLINE" | "OFFLINE";
    /**
     * 所属执法点 id
     */
    lawEnforcePoint?: string;
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
     * 火星坐标系
     */
    gcj02?: {
      /**
       * 卡口所在经度
       */
      lng?: number;
      /**
       * 卡口所在纬度
       */
      lat?: number;
    };
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
    attr?: "MAINLINE" | "INTERCITY" | "SVCRAMP" | "EXPORTRAMP" | "HUBRAMP";
    /**
     * 卡口状态
     */
    state?: "ONLINE" | "OFFLINE";
    /**
     * 所属执法点 id
     */
    lawEnforcePoint?: string;
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
     * 火星坐标系
     */
    gcj02?: {
      /**
       * 卡口所在经度
       */
      lng?: number;
      /**
       * 卡口所在纬度
       */
      lat?: number;
    };
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
    attr?: "MAINLINE" | "INTERCITY" | "SVCRAMP" | "EXPORTRAMP" | "HUBRAMP";
    /**
     * 卡口状态
     */
    state?: "ONLINE" | "OFFLINE";
    /**
     * 所属执法点 id
     */
    lawEnforcePoint?: string;
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
export interface ListWhitelistsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string[];
    plate_like?: string;
  };
}
export interface ListWhitelistsResponse {
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
    gantryName_like?: string;
    capTime_gte?: string;
    capTime_lte?: string;
    lawEnforcePointName?: string[];
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
    carDirect?: number;
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
     * 卡口所属执法点名称
     */
    lawEnforcePointName?: string;
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
    carDirect?: number;
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
     * 卡口所属执法点名称
     */
    lawEnforcePointName?: string;
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
    carDirect?: number;
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
     * 卡口所属执法点名称
     */
    lawEnforcePointName?: string;
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
    carDirect?: number;
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
     * 卡口所属执法点名称
     */
    lawEnforcePointName?: string;
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
    carDirect?: number;
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
     * 卡口所属执法点名称
     */
    lawEnforcePointName?: string;
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
    carDirect?: number;
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
     * 卡口所属执法点名称
     */
    lawEnforcePointName?: string;
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
export interface GetTrackRecordCountsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    createAt_lt?: string;
    createAt_gt?: string;
    _group?: ("createAt" | "gantryCode")[];
  };
}
export interface GetTrackRecordCountsResponse {
  body: {
    /**
     * id of count group
     */
    id?: string;
    /**
     * Group of date
     */
    createAt?: {
      /**
       * day of date
       */
      day?: string;
      /**
       * week of date
       */
      week?: string;
      /**
       * month of date
       */
      month?: string;
      /**
       * year of date
       */
      year?: string;
    };
    /**
     * 卡口 id
     */
    gantryCode?: string;
    /**
     * 计数
     */
    count?: number;
  }[];
}
export interface ListWarningsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string[];
    plate?: string[];
    plate_like?: string;
    ns_like?: string;
    name_like?: string;
    place_like?: string;
    type?: string;
    level?: number;
    gantry?: string[];
    capTime_gte?: string;
    capTime_lte?: string;
    state?: ("OPEN" | "CLOSED")[];
    lawEnforcePointName?: string[];
  };
}
export interface ListWarningsResponse {
  body: ({
    /**
     * 所属的部门
     */
    ns?: string;
    /**
     * 预警名称
     */
    name?: string;
    /**
     * 预警所属的类型
     */
    type?: string;
    /**
     * 预警代码，包含所有违章代码
     */
    code?: string;
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
     * 最近一次经过卡口所属执法点名称
     */
    lawEnforcePointName?: string;
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
    /**
     * 状态
     */
    state?: "OPEN" | "CLOSED";
    /**
     * 关闭预警user
     */
    closeBy?: string;
    /**
     * 关闭预警时间
     */
    closeAt?: Date;
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
     * 所属的部门
     */
    ns?: string;
    /**
     * 预警名称
     */
    name?: string;
    /**
     * 预警所属的类型
     */
    type?: string;
    /**
     * 预警代码，包含所有违章代码
     */
    code?: string;
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
     * 最近一次经过卡口所属执法点名称
     */
    lawEnforcePointName?: string;
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
    /**
     * 状态
     */
    state?: "OPEN" | "CLOSED";
    /**
     * 关闭预警user
     */
    closeBy?: string;
    /**
     * 关闭预警时间
     */
    closeAt?: Date;
  };
}
export interface CreateWarningResponse {
  /**
   * 预警数据详情
   */
  body: {
    /**
     * 所属的部门
     */
    ns?: string;
    /**
     * 预警名称
     */
    name?: string;
    /**
     * 预警所属的类型
     */
    type?: string;
    /**
     * 预警代码，包含所有违章代码
     */
    code?: string;
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
     * 最近一次经过卡口所属执法点名称
     */
    lawEnforcePointName?: string;
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
    /**
     * 状态
     */
    state?: "OPEN" | "CLOSED";
    /**
     * 关闭预警user
     */
    closeBy?: string;
    /**
     * 关闭预警时间
     */
    closeAt?: Date;
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
     * 所属的部门
     */
    ns?: string;
    /**
     * 预警名称
     */
    name?: string;
    /**
     * 预警所属的类型
     */
    type?: string;
    /**
     * 预警代码，包含所有违章代码
     */
    code?: string;
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
     * 最近一次经过卡口所属执法点名称
     */
    lawEnforcePointName?: string;
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
    /**
     * 状态
     */
    state?: "OPEN" | "CLOSED";
    /**
     * 关闭预警user
     */
    closeBy?: string;
    /**
     * 关闭预警时间
     */
    closeAt?: Date;
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
     * 所属的部门
     */
    ns?: string;
    /**
     * 预警名称
     */
    name?: string;
    /**
     * 预警所属的类型
     */
    type?: string;
    /**
     * 预警代码，包含所有违章代码
     */
    code?: string;
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
     * 最近一次经过卡口所属执法点名称
     */
    lawEnforcePointName?: string;
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
    /**
     * 状态
     */
    state?: "OPEN" | "CLOSED";
    /**
     * 关闭预警user
     */
    closeBy?: string;
    /**
     * 关闭预警时间
     */
    closeAt?: Date;
  };
}
export interface UpdateWarningResponse {
  /**
   * 预警数据详情
   */
  body: {
    /**
     * 所属的部门
     */
    ns?: string;
    /**
     * 预警名称
     */
    name?: string;
    /**
     * 预警所属的类型
     */
    type?: string;
    /**
     * 预警代码，包含所有违章代码
     */
    code?: string;
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
     * 最近一次经过卡口所属执法点名称
     */
    lawEnforcePointName?: string;
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
    /**
     * 状态
     */
    state?: "OPEN" | "CLOSED";
    /**
     * 关闭预警user
     */
    closeBy?: string;
    /**
     * 关闭预警时间
     */
    closeAt?: Date;
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
export interface CloseWarningRequest {
  warningId: string;
}
export interface CloseWarningResponse {
  /**
   * 预警数据详情
   */
  body: {
    /**
     * 所属的部门
     */
    ns?: string;
    /**
     * 预警名称
     */
    name?: string;
    /**
     * 预警所属的类型
     */
    type?: string;
    /**
     * 预警代码，包含所有违章代码
     */
    code?: string;
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
     * 最近一次经过卡口所属执法点名称
     */
    lawEnforcePointName?: string;
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
    /**
     * 状态
     */
    state?: "OPEN" | "CLOSED";
    /**
     * 关闭预警user
     */
    closeBy?: string;
    /**
     * 关闭预警时间
     */
    closeAt?: Date;
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
export interface GetWarningCountsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    createAt_lt?: string;
    createAt_gt?: string;
    ns_like?: string;
    name_like?: string;
    place_like?: string;
    type?: string;
    level?: number;
    gantry?: string[];
    capTime_gte?: string;
    capTime_lte?: string;
    _group?: ("createAt" | "gantry" | "code" | "type" | "level" | "ns")[];
  };
}
export interface GetWarningCountsResponse {
  body: {
    /**
     * id of count group
     */
    id?: string;
    /**
     * Group of date
     */
    createAt?: {
      /**
       * day of date
       */
      day?: string;
      /**
       * week of date
       */
      week?: string;
      /**
       * month of date
       */
      month?: string;
      /**
       * year of date
       */
      year?: string;
    };
    /**
     * 卡口 id
     */
    gantry?: string;
    /**
     * 违法代码
     */
    code?: string;
    /**
     * 违法等级
     */
    level?: string;
    /**
     * 违法类型
     */
    type?: string;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 计数
     */
    count?: number;
  }[];
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
export interface ListLawEnforcePointsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string[];
    name_like?: string;
  };
}
export interface ListLawEnforcePointsResponse {
  body: ({
    /**
     * 第三方 Id
     */
    thirdId?: string;
    /**
     * 执法点名称
     */
    name?: string;
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
export interface CreateLawEnforcePointRequest {
  /**
   * 创建执法点详情
   */
  body: {
    /**
     * 第三方 Id
     */
    thirdId: string;
    /**
     * 执法点名称
     */
    name: string;
  };
}
export interface CreateLawEnforcePointResponse {
  /**
   * 执法点
   */
  body: {
    /**
     * 第三方 Id
     */
    thirdId?: string;
    /**
     * 执法点名称
     */
    name?: string;
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
export interface GetLawEnforcePointRequest {
  lawEnforcePointId: string;
}
export interface GetLawEnforcePointResponse {
  /**
   * 执法点
   */
  body: {
    /**
     * 第三方 Id
     */
    thirdId?: string;
    /**
     * 执法点名称
     */
    name?: string;
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
export interface UpdateLawEnforcePointRequest {
  lawEnforcePointId: string;
  /**
   * 执法点详情
   */
  body: {
    /**
     * 第三方 Id
     */
    thirdId?: string;
    /**
     * 执法点名称
     */
    name?: string;
  };
}
export interface UpdateLawEnforcePointResponse {
  /**
   * 执法点
   */
  body: {
    /**
     * 第三方 Id
     */
    thirdId?: string;
    /**
     * 执法点名称
     */
    name?: string;
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
export interface DeleteLawEnforcePointRequest {
  lawEnforcePointId: string;
}
/**
 * Group of date
 */
export interface GroupDate {
  /**
   * day of date
   */
  day?: string;
  /**
   * week of date
   */
  week?: string;
  /**
   * month of date
   */
  month?: string;
  /**
   * year of date
   */
  year?: string;
}

export type IllegalRecordCountGroup = "createAt" | "gantryCode" | "code" | "type" | "ns";

/**
 * Count of illegal record aggregation
 */
export interface IllegalRecordCount {
  /**
   * id of count group
   */
  id?: string;
  /**
   * Group of date
   */
  createAt?: {
    /**
     * day of date
     */
    day?: string;
    /**
     * week of date
     */
    week?: string;
    /**
     * month of date
     */
    month?: string;
    /**
     * year of date
     */
    year?: string;
  };
  /**
   * 卡口 id
   */
  gantryCode?: string;
  /**
   * 违法代码
   */
  code?: string;
  /**
   * 违法类型
   */
  type?: string;
  /**
   * 所属命名空间
   */
  ns?: string;
  /**
   * 计数
   */
  count?: number;
}

export type WarningCountGroup = "createAt" | "gantry" | "code" | "type" | "level" | "ns";

/**
 * Count of illegal record aggregation
 */
export interface WarningCount {
  /**
   * id of count group
   */
  id?: string;
  /**
   * Group of date
   */
  createAt?: {
    /**
     * day of date
     */
    day?: string;
    /**
     * week of date
     */
    week?: string;
    /**
     * month of date
     */
    month?: string;
    /**
     * year of date
     */
    year?: string;
  };
  /**
   * 卡口 id
   */
  gantry?: string;
  /**
   * 违法代码
   */
  code?: string;
  /**
   * 违法等级
   */
  level?: string;
  /**
   * 违法类型
   */
  type?: string;
  /**
   * 所属命名空间
   */
  ns?: string;
  /**
   * 计数
   */
  count?: number;
}

export type TrackRecordCountGroup = "createAt" | "gantryCode";

/**
 * Count of track record aggregation
 */
export interface TrackRecordCount {
  /**
   * id of count group
   */
  id?: string;
  /**
   * Group of date
   */
  createAt?: {
    /**
     * day of date
     */
    day?: string;
    /**
     * week of date
     */
    week?: string;
    /**
     * month of date
     */
    month?: string;
    /**
     * year of date
     */
    year?: string;
  };
  /**
   * 卡口 id
   */
  gantryCode?: string;
  /**
   * 计数
   */
  count?: number;
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
   * 违法来源
   */
  source?: "GUANGXIN" | "HENGTONG" | "MANUAL" | "ETC";
  /**
   * 所属的部门
   */
  ns?: string;
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
   * 车辆视频
   */
  videos?: string[];
  /**
   * 车辆品牌代码
   */
  carBrand?: string;
  /**
   * 车辆品牌中文
   */
  carBrandStr?: string;
  /**
   * 违法名称
   */
  name?: string;
  /**
   * 违法内容
   */
  content?: string;
  /**
   * 违法代码
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
   * 违法来源
   */
  source?: "GUANGXIN" | "HENGTONG" | "MANUAL" | "ETC";
  /**
   * 所属的部门
   */
  ns?: string;
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
   * 车辆视频
   */
  videos?: string[];
  /**
   * 车辆品牌代码
   */
  carBrand?: string;
  /**
   * 车辆品牌中文
   */
  carBrandStr?: string;
  /**
   * 违法名称
   */
  name?: string;
  /**
   * 违法内容
   */
  content?: string;
  /**
   * 违法代码
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
 * 违法库
 */
export type IllegalRecord = {
  /**
   * 过车记录索引号
   */
  thirdId?: string;
  /**
   * 违法来源
   */
  source?: "GUANGXIN" | "HENGTONG" | "MANUAL" | "ETC";
  /**
   * 所属的部门
   */
  ns?: string;
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
   * 车辆视频
   */
  videos?: string[];
  /**
   * 车辆品牌代码
   */
  carBrand?: string;
  /**
   * 车辆品牌中文
   */
  carBrandStr?: string;
  /**
   * 违法名称
   */
  name?: string;
  /**
   * 违法内容
   */
  content?: string;
  /**
   * 违法代码
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
   * 违法内容
   */
  content?: string;
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
   * 违法内容
   */
  content?: string;
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
   * 违法内容
   */
  content?: string;
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
   * 卡口设备唯一识别码
   */
  id?: string;
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
  protocolType?: "DAHUA" | "HAIKANG" | "DIRECT";
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
  /**
   * 限速(千米/小时)
   */
  speedLimit?: number | null;
  /**
   * 设备状态
   */
  state?: "ONLINE" | "OFFLINE";
}

/**
 * 创建卡口设备详情
 */
export interface GantryDeviceCreateBody {
  /**
   * 卡口设备唯一识别码
   */
  id: string;
  /**
   * 所属卡口 id
   */
  gantry?: string;
  /**
   * 设备名称
   */
  name: string;
  /**
   * 设备编码
   */
  code?: string;
  /**
   * 协议类型
   */
  protocolType?: "DAHUA" | "HAIKANG" | "DIRECT";
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
  /**
   * 限速(千米/小时)
   */
  speedLimit?: number | null;
  /**
   * 设备状态
   */
  state?: "ONLINE" | "OFFLINE";
}

/**
 * 卡口设备
 */
export type GantryDevice = {
  /**
   * mongodb id
   */
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
} & {
  /**
   * 卡口设备唯一识别码
   */
  id?: string;
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
  protocolType?: "DAHUA" | "HAIKANG" | "DIRECT";
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
  /**
   * 限速(千米/小时)
   */
  speedLimit?: number | null;
  /**
   * 设备状态
   */
  state?: "ONLINE" | "OFFLINE";
};

/**
 * 卡口属性分类
 */
export type GantryAttr = "MAINLINE" | "INTERCITY" | "SVCRAMP" | "EXPORTRAMP" | "HUBRAMP";

/**
 * 卡口状态分类
 */
export type GantryState = "ONLINE" | "OFFLINE";

/**
 * 卡口协议类型分类
 */
export type GantryProtocolType = "DAHUA" | "HAIKANG" | "DIRECT";

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
   * 火星坐标系
   */
  gcj02?: {
    /**
     * 卡口所在经度
     */
    lng?: number;
    /**
     * 卡口所在纬度
     */
    lat?: number;
  };
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
  attr?: "MAINLINE" | "INTERCITY" | "SVCRAMP" | "EXPORTRAMP" | "HUBRAMP";
  /**
   * 卡口状态
   */
  state?: "ONLINE" | "OFFLINE";
  /**
   * 所属执法点 id
   */
  lawEnforcePoint?: string;
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
   * 火星坐标系
   */
  gcj02?: {
    /**
     * 卡口所在经度
     */
    lng?: number;
    /**
     * 卡口所在纬度
     */
    lat?: number;
  };
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
  attr: "MAINLINE" | "INTERCITY" | "SVCRAMP" | "EXPORTRAMP" | "HUBRAMP";
  /**
   * 卡口状态
   */
  state?: "ONLINE" | "OFFLINE";
  /**
   * 所属执法点 id
   */
  lawEnforcePoint?: string;
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
   * 火星坐标系
   */
  gcj02?: {
    /**
     * 卡口所在经度
     */
    lng?: number;
    /**
     * 卡口所在纬度
     */
    lat?: number;
  };
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
  attr?: "MAINLINE" | "INTERCITY" | "SVCRAMP" | "EXPORTRAMP" | "HUBRAMP";
  /**
   * 卡口状态
   */
  state?: "ONLINE" | "OFFLINE";
  /**
   * 所属执法点 id
   */
  lawEnforcePoint?: string;
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
  carDirect?: number;
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
   * 卡口所属执法点名称
   */
  lawEnforcePointName?: string;
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
  carDirect?: number;
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
   * 卡口所属执法点名称
   */
  lawEnforcePointName?: string;
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
  carDirect?: number;
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
   * 卡口所属执法点名称
   */
  lawEnforcePointName?: string;
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

export type WarningState = "OPEN" | "CLOSED";

/**
 * 预警数据详情
 */
export interface WarningDoc {
  /**
   * 所属的部门
   */
  ns?: string;
  /**
   * 预警名称
   */
  name?: string;
  /**
   * 预警所属的类型
   */
  type?: string;
  /**
   * 预警代码，包含所有违章代码
   */
  code?: string;
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
   * 最近一次经过卡口所属执法点名称
   */
  lawEnforcePointName?: string;
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
  /**
   * 状态
   */
  state?: "OPEN" | "CLOSED";
  /**
   * 关闭预警user
   */
  closeBy?: string;
  /**
   * 关闭预警时间
   */
  closeAt?: Date;
}

/**
 * 创建过车数据详情
 */
export interface WarningCreateBody {
  /**
   * 所属的部门
   */
  ns?: string;
  /**
   * 预警名称
   */
  name?: string;
  /**
   * 预警所属的类型
   */
  type?: string;
  /**
   * 预警代码，包含所有违章代码
   */
  code?: string;
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
   * 最近一次经过卡口所属执法点名称
   */
  lawEnforcePointName?: string;
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
  /**
   * 状态
   */
  state?: "OPEN" | "CLOSED";
  /**
   * 关闭预警user
   */
  closeBy?: string;
  /**
   * 关闭预警时间
   */
  closeAt?: Date;
}

/**
 * 预警数据详情
 */
export type Warning = {
  /**
   * 所属的部门
   */
  ns?: string;
  /**
   * 预警名称
   */
  name?: string;
  /**
   * 预警所属的类型
   */
  type?: string;
  /**
   * 预警代码，包含所有违章代码
   */
  code?: string;
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
   * 最近一次经过卡口所属执法点名称
   */
  lawEnforcePointName?: string;
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
  /**
   * 状态
   */
  state?: "OPEN" | "CLOSED";
  /**
   * 关闭预警user
   */
  closeBy?: string;
  /**
   * 关闭预警时间
   */
  closeAt?: Date;
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
 * 执法点详情
 */
export interface LawEnforcePointDoc {
  /**
   * 第三方 Id
   */
  thirdId?: string;
  /**
   * 执法点名称
   */
  name?: string;
}

/**
 * 创建执法点详情
 */
export interface LawEnforcePointCreateBody {
  /**
   * 第三方 Id
   */
  thirdId: string;
  /**
   * 执法点名称
   */
  name: string;
}

/**
 * 执法点
 */
export type LawEnforcePoint = {
  /**
   * 第三方 Id
   */
  thirdId?: string;
  /**
   * 执法点名称
   */
  name?: string;
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
