//@ts-check
import fetch from "@36node/fetch";

export default class SDK {
  /**@type {string} **/
  base;
  /**@type {string} **/
  token;

  /**
   * Sdk auth
   *
   * @returns {string} auth header
   * */
  get auth() {
    let token = this.token;
    // @ts-ignore
    if (typeof token === "function") token = token();
    if (token) return `Bearer ${token}`;

    return "";
  }

  /**
   * Init store sdk
   *
   * @param {Object} opt
   * @param {string} opt.base  base url
   * @param {string} opt.token token for authorization
   */
  constructor(opt = { base: "", token: "" }) {
    this.base = opt.base;
    this.token = opt.token;
  }

  /**
   * illegalRecord's methods
   */
  illegalRecord = {
    /**
     * List illegalRecords
     *
     * @param {ListIllegalRecordsRequest} req listIllegalRecords request
     * @returns {Promise<ListIllegalRecordsResponse>} A paged array of illegal records
     */
    listIllegalRecords: req => {
      const { query } = req || {};

      return fetch(`${this.base}/illegalRecords`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create an illegal record
     *
     * @param {CreateIllegalRecordRequest} req createIllegalRecord request
     * @returns {Promise<CreateIllegalRecordResponse>} The illegal created
     */
    createIllegalRecord: req => {
      const { body } = req || {};

      if (!body)
        throw new Error("requetBody is required for createIllegalRecord");

      return fetch(`${this.base}/illegalRecords`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * confirm an open illegal record
     *
     * @param {ConfirmIllegalRecordRequest} req confirmIllegalRecord request
     * @returns {Promise<ConfirmIllegalRecordResponse>} The illegal record
     */
    confirmIllegalRecord: req => {
      const { illegalRecordId } = req || {};

      if (!illegalRecordId)
        throw new Error("illegalRecordId is required for confirmIllegalRecord");

      return fetch(`${this.base}/illegalRecords/${illegalRecordId}/!confirm`, {
        method: "PUT",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find an illegal record by id
     *
     * @param {GetIllegalRecordRequest} req getIllegalRecord request
     * @returns {Promise<GetIllegalRecordResponse>} Expected response to a valid request
     */
    getIllegalRecord: req => {
      const { illegalRecordId } = req || {};

      if (!illegalRecordId)
        throw new Error("illegalRecordId is required for getIllegalRecord");

      return fetch(`${this.base}/illegalRecords/${illegalRecordId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update illegal record
     *
     * @param {UpdateIllegalRecordRequest} req updateIllegalRecord request
     * @returns {Promise<UpdateIllegalRecordResponse>} The illegal
     */
    updateIllegalRecord: req => {
      const { illegalRecordId, body } = req || {};

      if (!illegalRecordId)
        throw new Error("illegalRecordId is required for updateIllegalRecord");
      if (!body)
        throw new Error("requetBody is required for updateIllegalRecord");

      return fetch(`${this.base}/illegalRecords/${illegalRecordId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Delete illegal device
     *
     * @param {DeleteIllegalRecordRequest} req deleteIllegalRecord request
     */
    deleteIllegalRecord: req => {
      const { illegalRecordId } = req || {};

      if (!illegalRecordId)
        throw new Error("illegalRecordId is required for deleteIllegalRecord");

      return fetch(`${this.base}/illegalRecords/${illegalRecordId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Get illegal record counts
     *
     * @param {GetIllegalRecordCountsRequest} req getIllegalRecordCounts request
     * @returns {Promise<GetIllegalRecordCountsResponse>} Expected response to a valid request
     */
    getIllegalRecordCounts: req => {
      const { query } = req || {};

      return fetch(`${this.base}/illegalRecord/counts`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * illegalType's methods
   */
  illegalType = {
    /**
     * List illegalTypes
     *
     * @param {ListIllegalTypesRequest} req listIllegalTypes request
     * @returns {Promise<ListIllegalTypesResponse>} A paged array of illegalTypes
     */
    listIllegalTypes: req => {
      const { query } = req || {};

      return fetch(`${this.base}/illegalTypes`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create a illegalType
     *
     * @param {CreateIllegalTypeRequest} req createIllegalType request
     * @returns {Promise<CreateIllegalTypeResponse>} The illegalType created
     */
    createIllegalType: req => {
      const { body } = req || {};

      if (!body)
        throw new Error("requetBody is required for createIllegalType");

      return fetch(`${this.base}/illegalTypes`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find illegalType by id
     *
     * @param {GetIllegalTypeRequest} req getIllegalType request
     * @returns {Promise<GetIllegalTypeResponse>} Expected response to a valid request
     */
    getIllegalType: req => {
      const { illegalTypeId } = req || {};

      if (!illegalTypeId)
        throw new Error("illegalTypeId is required for getIllegalType");

      return fetch(`${this.base}/illegalTypes/${illegalTypeId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update illegalType
     *
     * @param {UpdateIllegalTypeRequest} req updateIllegalType request
     * @returns {Promise<UpdateIllegalTypeResponse>} The illegalType
     */
    updateIllegalType: req => {
      const { illegalTypeId, body } = req || {};

      if (!illegalTypeId)
        throw new Error("illegalTypeId is required for updateIllegalType");
      if (!body)
        throw new Error("requetBody is required for updateIllegalType");

      return fetch(`${this.base}/illegalTypes/${illegalTypeId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Delete illegalType device
     *
     * @param {DeleteIllegalTypeRequest} req deleteIllegalType request
     */
    deleteIllegalType: req => {
      const { illegalTypeId } = req || {};

      if (!illegalTypeId)
        throw new Error("illegalTypeId is required for deleteIllegalType");

      return fetch(`${this.base}/illegalTypes/${illegalTypeId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * gantryDevice's methods
   */
  gantryDevice = {
    /**
     * List gantryDevices
     *
     * @param {ListGantryDevicesRequest} req listGantryDevices request
     * @returns {Promise<ListGantryDevicesResponse>} A paged array of gantryDevices
     */
    listGantryDevices: req => {
      const { query } = req || {};

      return fetch(`${this.base}/gantryDevices`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create a gantryDevice
     *
     * @param {CreateGantryDeviceRequest} req createGantryDevice request
     * @returns {Promise<CreateGantryDeviceResponse>} The gantryDevice created
     */
    createGantryDevice: req => {
      const { body } = req || {};

      if (!body)
        throw new Error("requetBody is required for createGantryDevice");

      return fetch(`${this.base}/gantryDevices`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find gantryDevice by id
     *
     * @param {GetGantryDeviceRequest} req getGantryDevice request
     * @returns {Promise<GetGantryDeviceResponse>} Expected response to a valid request
     */
    getGantryDevice: req => {
      const { gantryDeviceId } = req || {};

      if (!gantryDeviceId)
        throw new Error("gantryDeviceId is required for getGantryDevice");

      return fetch(`${this.base}/gantryDevices/${gantryDeviceId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update gantryDevice
     *
     * @param {UpdateGantryDeviceRequest} req updateGantryDevice request
     * @returns {Promise<UpdateGantryDeviceResponse>} The gantryDevice
     */
    updateGantryDevice: req => {
      const { gantryDeviceId, body } = req || {};

      if (!gantryDeviceId)
        throw new Error("gantryDeviceId is required for updateGantryDevice");
      if (!body)
        throw new Error("requetBody is required for updateGantryDevice");

      return fetch(`${this.base}/gantryDevices/${gantryDeviceId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Delete gantryDevice
     *
     * @param {DeleteGantryDeviceRequest} req deleteGantryDevice request
     */
    deleteGantryDevice: req => {
      const { gantryDeviceId } = req || {};

      if (!gantryDeviceId)
        throw new Error("gantryDeviceId is required for deleteGantryDevice");

      return fetch(`${this.base}/gantryDevices/${gantryDeviceId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * gantry's methods
   */
  gantry = {
    /**
     * List gantries
     *
     * @param {ListGantriesRequest} req listGantries request
     * @returns {Promise<ListGantriesResponse>} A paged array of gantries
     */
    listGantries: req => {
      const { query } = req || {};

      return fetch(`${this.base}/gantries`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create a gantry
     *
     * @param {CreateGantryRequest} req createGantry request
     * @returns {Promise<CreateGantryResponse>} The gantry created
     */
    createGantry: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createGantry");

      return fetch(`${this.base}/gantries`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find gantry device by id
     *
     * @param {GetGantryRequest} req getGantry request
     * @returns {Promise<GetGantryResponse>} Expected response to a valid request
     */
    getGantry: req => {
      const { gantryId } = req || {};

      if (!gantryId) throw new Error("gantryId is required for getGantry");

      return fetch(`${this.base}/gantries/${gantryId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update gantry device
     *
     * @param {UpdateGantryRequest} req updateGantry request
     * @returns {Promise<UpdateGantryResponse>} The gantry
     */
    updateGantry: req => {
      const { gantryId, body } = req || {};

      if (!gantryId) throw new Error("gantryId is required for updateGantry");
      if (!body) throw new Error("requetBody is required for updateGantry");

      return fetch(`${this.base}/gantries/${gantryId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Delete gantry
     *
     * @param {DeleteGantryRequest} req deleteGantry request
     */
    deleteGantry: req => {
      const { gantryId } = req || {};

      if (!gantryId) throw new Error("gantryId is required for deleteGantry");

      return fetch(`${this.base}/gantries/${gantryId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * whitelist's methods
   */
  whitelist = {
    /**
     * List whitelists
     *
     * @param {ListWhitelistsRequest} req listWhitelists request
     * @returns {Promise<ListWhitelistsResponse>} A paged array of whitelist
     */
    listWhitelists: req => {
      const { query } = req || {};

      return fetch(`${this.base}/whitelists`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create a whitelist
     *
     * @param {CreateWhitelistRequest} req createWhitelist request
     * @returns {Promise<CreateWhitelistResponse>} The whitelist created
     */
    createWhitelist: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createWhitelist");

      return fetch(`${this.base}/whitelists`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find whitelist by id
     *
     * @param {GetWhitelistRequest} req getWhitelist request
     * @returns {Promise<GetWhitelistResponse>} Expected response to a valid request
     */
    getWhitelist: req => {
      const { whitelistId } = req || {};

      if (!whitelistId)
        throw new Error("whitelistId is required for getWhitelist");

      return fetch(`${this.base}/whitelists/${whitelistId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update whitelist device
     *
     * @param {UpdateWhitelistRequest} req updateWhitelist request
     * @returns {Promise<UpdateWhitelistResponse>} The whitelist
     */
    updateWhitelist: req => {
      const { whitelistId, body } = req || {};

      if (!whitelistId)
        throw new Error("whitelistId is required for updateWhitelist");
      if (!body) throw new Error("requetBody is required for updateWhitelist");

      return fetch(`${this.base}/whitelists/${whitelistId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Delete whitelist
     *
     * @param {DeleteWhitelistRequest} req deleteWhitelist request
     */
    deleteWhitelist: req => {
      const { whitelistId } = req || {};

      if (!whitelistId)
        throw new Error("whitelistId is required for deleteWhitelist");

      return fetch(`${this.base}/whitelists/${whitelistId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * trackRecord's methods
   */
  trackRecord = {
    /**
     * List trackRecords
     *
     * @param {ListTrackRecordsRequest} req listTrackRecords request
     * @returns {Promise<ListTrackRecordsResponse>} A paged array of trackRecords
     */
    listTrackRecords: req => {
      const { query } = req || {};

      return fetch(`${this.base}/trackRecords`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create a trackRecord
     *
     * @param {CreateTrackRecordRequest} req createTrackRecord request
     * @returns {Promise<CreateTrackRecordResponse>} The trackRecord created
     */
    createTrackRecord: req => {
      const { body } = req || {};

      if (!body)
        throw new Error("requetBody is required for createTrackRecord");

      return fetch(`${this.base}/trackRecords`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find trackRecord by id
     *
     * @param {GetTrackRecordRequest} req getTrackRecord request
     * @returns {Promise<GetTrackRecordResponse>} Expected response to a valid request
     */
    getTrackRecord: req => {
      const { trackRecordId } = req || {};

      if (!trackRecordId)
        throw new Error("trackRecordId is required for getTrackRecord");

      return fetch(`${this.base}/trackRecords/${trackRecordId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update trackRecord device
     *
     * @param {UpdateTrackRecordRequest} req updateTrackRecord request
     * @returns {Promise<UpdateTrackRecordResponse>} The trackRecord
     */
    updateTrackRecord: req => {
      const { trackRecordId, body } = req || {};

      if (!trackRecordId)
        throw new Error("trackRecordId is required for updateTrackRecord");
      if (!body)
        throw new Error("requetBody is required for updateTrackRecord");

      return fetch(`${this.base}/trackRecords/${trackRecordId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Delete trackRecord
     *
     * @param {DeleteTrackRecordRequest} req deleteTrackRecord request
     */
    deleteTrackRecord: req => {
      const { trackRecordId } = req || {};

      if (!trackRecordId)
        throw new Error("trackRecordId is required for deleteTrackRecord");

      return fetch(`${this.base}/trackRecords/${trackRecordId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Get track record counts
     *
     * @param {GetTrackRecordCountsRequest} req getTrackRecordCounts request
     * @returns {Promise<GetTrackRecordCountsResponse>} Expected response to a valid request
     */
    getTrackRecordCounts: req => {
      const { query } = req || {};

      return fetch(`${this.base}/trackRecord/counts`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * warning's methods
   */
  warning = {
    /**
     * List warnings
     *
     * @param {ListWarningsRequest} req listWarnings request
     * @returns {Promise<ListWarningsResponse>} A paged array of warnings
     */
    listWarnings: req => {
      const { query } = req || {};

      return fetch(`${this.base}/warnings`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create a warning
     *
     * @param {CreateWarningRequest} req createWarning request
     * @returns {Promise<CreateWarningResponse>} The warning created
     */
    createWarning: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createWarning");

      return fetch(`${this.base}/warnings`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find warning by id
     *
     * @param {GetWarningRequest} req getWarning request
     * @returns {Promise<GetWarningResponse>} Expected response to a valid request
     */
    getWarning: req => {
      const { warningId } = req || {};

      if (!warningId) throw new Error("warningId is required for getWarning");

      return fetch(`${this.base}/warnings/${warningId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update warning device
     *
     * @param {UpdateWarningRequest} req updateWarning request
     * @returns {Promise<UpdateWarningResponse>} The warning
     */
    updateWarning: req => {
      const { warningId, body } = req || {};

      if (!warningId)
        throw new Error("warningId is required for updateWarning");
      if (!body) throw new Error("requetBody is required for updateWarning");

      return fetch(`${this.base}/warnings/${warningId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Delete warning
     *
     * @param {DeleteWarningRequest} req deleteWarning request
     */
    deleteWarning: req => {
      const { warningId } = req || {};

      if (!warningId)
        throw new Error("warningId is required for deleteWarning");

      return fetch(`${this.base}/warnings/${warningId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * close an open warning
     *
     * @param {CloseWarningRequest} req closeWarning request
     * @returns {Promise<CloseWarningResponse>} Expected response to a valid request
     */
    closeWarning: req => {
      const { warningId } = req || {};

      if (!warningId) throw new Error("warningId is required for closeWarning");

      return fetch(`${this.base}/warnings/${warningId}/!close`, {
        method: "PUT",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Get warning counts
     *
     * @param {GetWarningCountsRequest} req getWarningCounts request
     * @returns {Promise<GetWarningCountsResponse>} Expected response to a valid request
     */
    getWarningCounts: req => {
      const { query } = req || {};

      return fetch(`${this.base}/warning/counts`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * settings's methods
   */
  settings = {
    /**
     * get settings
     *
     * @param {GetSettingsRequest} req getSettings request
     * @returns {Promise<GetSettingsResponse>} setting
     */
    getSettings: req => {
      const {} = req || {};

      return fetch(`${this.base}/settings`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * update setting
     *
     * @param {UpdateSettingRequest} req updateSetting request
     * @returns {Promise<UpdateSettingResponse>} The warning
     */
    updateSetting: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for updateSetting");

      return fetch(`${this.base}/settings`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * lawEnforcePoint's methods
   */
  lawEnforcePoint = {
    /**
     * List lawEnforcePoints
     *
     * @param {ListLawEnforcePointsRequest} req listLawEnforcePoints request
     * @returns {Promise<ListLawEnforcePointsResponse>} A paged array of lawEnforcePoints
     */
    listLawEnforcePoints: req => {
      const { query } = req || {};

      return fetch(`${this.base}/lawEnforcePoints`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create a lawEnforcePoint
     *
     * @param {CreateLawEnforcePointRequest} req createLawEnforcePoint request
     * @returns {Promise<CreateLawEnforcePointResponse>} The lawEnforcePoint created
     */
    createLawEnforcePoint: req => {
      const { body } = req || {};

      if (!body)
        throw new Error("requetBody is required for createLawEnforcePoint");

      return fetch(`${this.base}/lawEnforcePoints`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find lawEnforcePoint by id
     *
     * @param {GetLawEnforcePointRequest} req getLawEnforcePoint request
     * @returns {Promise<GetLawEnforcePointResponse>} Expected response to a valid request
     */
    getLawEnforcePoint: req => {
      const { lawEnforcePointId } = req || {};

      if (!lawEnforcePointId)
        throw new Error("lawEnforcePointId is required for getLawEnforcePoint");

      return fetch(`${this.base}/lawEnforcePoints/${lawEnforcePointId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update lawEnforcePoint device
     *
     * @param {UpdateLawEnforcePointRequest} req updateLawEnforcePoint request
     * @returns {Promise<UpdateLawEnforcePointResponse>} The lawEnforcePoint
     */
    updateLawEnforcePoint: req => {
      const { lawEnforcePointId, body } = req || {};

      if (!lawEnforcePointId)
        throw new Error(
          "lawEnforcePointId is required for updateLawEnforcePoint"
        );
      if (!body)
        throw new Error("requetBody is required for updateLawEnforcePoint");

      return fetch(`${this.base}/lawEnforcePoints/${lawEnforcePointId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Delete lawEnforcePoint
     *
     * @param {DeleteLawEnforcePointRequest} req deleteLawEnforcePoint request
     */
    deleteLawEnforcePoint: req => {
      const { lawEnforcePointId } = req || {};

      if (!lawEnforcePointId)
        throw new Error(
          "lawEnforcePointId is required for deleteLawEnforcePoint"
        );

      return fetch(`${this.base}/lawEnforcePoints/${lawEnforcePointId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * vehicle's methods
   */
  vehicle = {
    /**
     * List vehicles
     *
     * @param {ListVehiclesRequest} req listVehicles request
     * @returns {Promise<ListVehiclesResponse>} A paged array of vehicle
     */
    listVehicles: req => {
      const { query } = req || {};

      return fetch(`${this.base}/vehicles`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create a vehicle
     *
     * @param {CreateVehicleRequest} req createVehicle request
     * @returns {Promise<CreateVehicleResponse>} The vehicle created
     */
    createVehicle: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createVehicle");

      return fetch(`${this.base}/vehicles`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Upsert a vehicle
     *
     * @param {UpsertVehicleRequest} req upsertVehicle request
     * @returns {Promise<UpsertVehicleResponse>} The vehicle upserted
     */
    upsertVehicle: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for upsertVehicle");

      return fetch(`${this.base}/vehicles/upsert`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find vehicle by id
     *
     * @param {GetVehicleRequest} req getVehicle request
     * @returns {Promise<GetVehicleResponse>} Expected response to a valid request
     */
    getVehicle: req => {
      const { vehicleId } = req || {};

      if (!vehicleId) throw new Error("vehicleId is required for getVehicle");

      return fetch(`${this.base}/vehicles/${vehicleId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update vehicle
     *
     * @param {UpdateVehicleRequest} req updateVehicle request
     * @returns {Promise<UpdateVehicleResponse>} The vehicle
     */
    updateVehicle: req => {
      const { vehicleId, body } = req || {};

      if (!vehicleId)
        throw new Error("vehicleId is required for updateVehicle");
      if (!body) throw new Error("requetBody is required for updateVehicle");

      return fetch(`${this.base}/vehicles/${vehicleId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Delete vehicle
     *
     * @param {DeleteVehicleRequest} req deleteVehicle request
     */
    deleteVehicle: req => {
      const { vehicleId } = req || {};

      if (!vehicleId)
        throw new Error("vehicleId is required for deleteVehicle");

      return fetch(`${this.base}/vehicles/${vehicleId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
  };
}
