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
   * illegal's methods
   */
  illegal = {
    /**
     * List illegals
     *
     * @param {ListIllegalsRequest} req listIllegals request
     * @returns {Promise<ListIllegalsResponse>} A paged array of illegals
     */
    listIllegals: req => {
      const { query } = req || {};

      return fetch(`${this.base}/illegals`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create a illegal
     *
     * @param {CreateIllegalRequest} req createIllegal request
     * @returns {Promise<CreateIllegalResponse>} The illegal created
     */
    createIllegal: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createIllegal");

      return fetch(`${this.base}/illegals`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * confirm an open illegal
     *
     * @param {ConfirmIllegalRequest} req confirmIllegal request
     * @returns {Promise<ConfirmIllegalResponse>} The illegal
     */
    confirmIllegal: req => {
      const { illegalId } = req || {};

      if (!illegalId)
        throw new Error("illegalId is required for confirmIllegal");

      return fetch(`${this.base}/illegal/${illegalId}/!confirm`, {
        method: "PUT",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find illegal device by id
     *
     * @param {GetIllegalRequest} req getIllegal request
     * @returns {Promise<GetIllegalResponse>} Expected response to a valid request
     */
    getIllegal: req => {
      const { illegalId } = req || {};

      if (!illegalId) throw new Error("illegalId is required for getIllegal");

      return fetch(`${this.base}/illegal/${illegalId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update illegal device
     *
     * @param {UpdateIllegalRequest} req updateIllegal request
     * @returns {Promise<UpdateIllegalResponse>} The illegal
     */
    updateIllegal: req => {
      const { illegalId, body } = req || {};

      if (!illegalId)
        throw new Error("illegalId is required for updateIllegal");
      if (!body) throw new Error("requetBody is required for updateIllegal");

      return fetch(`${this.base}/illegal/${illegalId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Delete illegal device
     *
     * @param {DeleteIllegalRequest} req deleteIllegal request
     */
    deleteIllegal: req => {
      const { illegalId } = req || {};

      if (!illegalId)
        throw new Error("illegalId is required for deleteIllegal");

      return fetch(`${this.base}/illegal/${illegalId}`, {
        method: "DELETE",
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

      return fetch(`${this.base}/illegalType/${illegalTypeId}`, {
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

      return fetch(`${this.base}/illegalType/${illegalTypeId}`, {
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

      return fetch(`${this.base}/illegalType/${illegalTypeId}`, {
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

      return fetch(`${this.base}/gantry/${gantryId}`, {
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

      return fetch(`${this.base}/gantry/${gantryId}`, {
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

      return fetch(`${this.base}/gantry/${gantryId}`, {
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
     * List whitelist
     *
     * @param {ListWhitelistRequest} req listWhitelist request
     * @returns {Promise<ListWhitelistResponse>} A paged array of whitelist
     */
    listWhitelist: req => {
      const { query } = req || {};

      return fetch(`${this.base}/whitelist`, {
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

      return fetch(`${this.base}/whitelist`, {
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

      return fetch(`${this.base}/whitelist/${whitelistId}`, {
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

      return fetch(`${this.base}/whitelist/${whitelistId}`, {
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

      return fetch(`${this.base}/whitelist/${whitelistId}`, {
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

      return fetch(`${this.base}/TrackRecords`, {
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

      return fetch(`${this.base}/TrackRecords`, {
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

      return fetch(`${this.base}/TrackRecords/${trackRecordId}`, {
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

      return fetch(`${this.base}/TrackRecords/${trackRecordId}`, {
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

      return fetch(`${this.base}/TrackRecords/${trackRecordId}`, {
        method: "DELETE",
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

      return fetch(`${this.base}/Warnings`, {
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

      return fetch(`${this.base}/Warnings`, {
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

      return fetch(`${this.base}/Warnings/${warningId}`, {
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

      return fetch(`${this.base}/Warnings/${warningId}`, {
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

      return fetch(`${this.base}/Warnings/${warningId}`, {
        method: "DELETE",
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
}
