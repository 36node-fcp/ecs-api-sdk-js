declare class SDK {
  constructor(opts?: Options);

  base: string;
  token: string | (() => string);
  auth: string;

  illegal: IllegalAPI;
  bayonet: BayonetAPI;
  whitelist: WhitelistAPI;
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
export interface BayonetAPI {
  /**
   * List bayonets
   */
  listBayonets(req: ListBayonetsRequest): Promise<ListBayonetsResponse>;
  /**
   * Create a bayonet
   */
  createBayonet(req: CreateBayonetRequest): Promise<CreateBayonetResponse>;
  /**
   * Find bayonet device by id
   */
  getBayonet(req: GetBayonetRequest): Promise<GetBayonetResponse>;
  /**
   * Update bayonet device
   */
  updateBayonet(req: UpdateBayonetRequest): Promise<UpdateBayonetResponse>;
  /**
   * Delete bayonet
   */
  deleteBayonet(req: DeleteBayonetRequest): Promise<void>;
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
export interface ListBayonetsRequest {
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
export interface ListBayonetsResponse {
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
    longitude?: number;
    /**
     * 卡口所在纬度
     */
    latitude?: number;
    /**
     * 上级卡口
     */
    parent?: string;
    /**
     * 卡口属性
     */
    attr?: "HIGHSPEED" | "EXPORT";
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
export interface CreateBayonetRequest {
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
    longitude: number;
    /**
     * 卡口所在纬度
     */
    latitude: number;
    /**
     * 上级卡口
     */
    parent?: string;
    /**
     * 卡口属性
     */
    attr: "HIGHSPEED" | "EXPORT";
    /**
     * 卡口状态
     */
    state: "ONLINE" | "OFFLINE";
  };
}
export interface CreateBayonetResponse {
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
    longitude?: number;
    /**
     * 卡口所在纬度
     */
    latitude?: number;
    /**
     * 上级卡口
     */
    parent?: string;
    /**
     * 卡口属性
     */
    attr?: "HIGHSPEED" | "EXPORT";
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
export interface GetBayonetRequest {
  bayonetId: string;
}
export interface GetBayonetResponse {
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
    longitude?: number;
    /**
     * 卡口所在纬度
     */
    latitude?: number;
    /**
     * 上级卡口
     */
    parent?: string;
    /**
     * 卡口属性
     */
    attr?: "HIGHSPEED" | "EXPORT";
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
export interface UpdateBayonetRequest {
  bayonetId: string;
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
    longitude?: number;
    /**
     * 卡口所在纬度
     */
    latitude?: number;
    /**
     * 上级卡口
     */
    parent?: string;
    /**
     * 卡口属性
     */
    attr?: "HIGHSPEED" | "EXPORT";
    /**
     * 卡口状态
     */
    state?: "ONLINE" | "OFFLINE";
  };
}
export interface UpdateBayonetResponse {
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
    longitude?: number;
    /**
     * 卡口所在纬度
     */
    latitude?: number;
    /**
     * 上级卡口
     */
    parent?: string;
    /**
     * 卡口属性
     */
    attr?: "HIGHSPEED" | "EXPORT";
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
export interface DeleteBayonetRequest {
  bayonetId: string;
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
export type BayonetAttr = "HIGHSPEED" | "EXPORT";

/**
 * 卡口状态分类
 */
export type BayonetState = "ONLINE" | "OFFLINE";

/**
 * 卡口信息详情
 */
export interface BayonetDoc {
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
  longitude?: number;
  /**
   * 卡口所在纬度
   */
  latitude?: number;
  /**
   * 上级卡口
   */
  parent?: string;
  /**
   * 卡口属性
   */
  attr?: "HIGHSPEED" | "EXPORT";
  /**
   * 卡口状态
   */
  state?: "ONLINE" | "OFFLINE";
}

/**
 * 创建卡口详情
 */
export interface BayonetCreateBody {
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
  longitude: number;
  /**
   * 卡口所在纬度
   */
  latitude: number;
  /**
   * 上级卡口
   */
  parent?: string;
  /**
   * 卡口属性
   */
  attr: "HIGHSPEED" | "EXPORT";
  /**
   * 卡口状态
   */
  state: "ONLINE" | "OFFLINE";
}

/**
 * 卡口
 */
export type Bayonet = {
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
  longitude?: number;
  /**
   * 卡口所在纬度
   */
  latitude?: number;
  /**
   * 上级卡口
   */
  parent?: string;
  /**
   * 卡口属性
   */
  attr?: "HIGHSPEED" | "EXPORT";
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
