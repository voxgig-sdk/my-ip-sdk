

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { MyIpSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('GetIpInfoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MY_IP_TEST_LIVE=TRUE.
  afterEach(liveDelay('MY_IP_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MyIpSDK.test()
    const ent = testsdk.GetIpInfo()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MY_IP_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'get_ip_info.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"cc","req":true,"short":"Two-letter country code in ISO 3166-1 alpha-2 format","type":"`$STRING`","index$":0},{"active":true,"name":"country","req":true,"short":"Country location of the IP address in English language","type":"`$STRING`","index$":1},{"active":true,"name":"ip","req":true,"short":"IP Address of the client making the request","type":"`$STRING`","index$":2}],"name":"get_ip_info","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{},"contract":{"id":"GET /","json":"{\"operationId\":\"getIpInfo\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"cc\":\"US\",\"country\":\"United States\",\"ip\":\"66.249.75.9\"},\"schema\":{\"properties\":{\"cc\":{\"description\":\"Two-letter country code in ISO 3166-1 alpha-2 format\",\"example\":\"US\",\"pattern\":\"^[A-Z]{2}$\",\"type\":\"string\"},\"country\":{\"description\":\"Country location of the IP address in English language\",\"example\":\"United States\",\"type\":\"string\"},\"ip\":{\"description\":\"IP Address of the client making the request\",\"example\":\"66.249.75.9\",\"type\":\"string\"}},\"required\":[\"ip\",\"country\",\"cc\"],\"type\":\"object\"}}},\"description\":\"Successful response with IP address information\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/","segments":[],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"get_ip_info","name__orig":"get_ip_info","Name":"GetIpInfo","name_":"get_ip_info","name-":"get-ip-info","NAME":"GET_IP_INFO","index$":0}, {"active":true,"entity":"get_ip_info","key$":"BasicGetIpInfoFlow","kind":"basic","name":"BasicGetIpInfoFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"get_ip_info_ref01","srcdatavar":"get_ip_info_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-get_ip_info_ref01"}}],"index$":0}]}, 'GetIpInfo')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let get_ip_info_ref01_data = Object.values(setup.data.existing.get_ip_info)[0] as any

    // LOAD
    const get_ip_info_ref01_ent = client.GetIpInfo()
    const get_ip_info_ref01_match_dt0: any = {}
    const get_ip_info_ref01_data_dt0 = (await get_ip_info_ref01_ent.load(get_ip_info_ref01_match_dt0)).data()
    assert(null != get_ip_info_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/get_ip_info/GetIpInfoTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = MyIpSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['get_ip_info01','get_ip_info02','get_ip_info03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MY_IP_TEST_GET_IP_INFO_ENTID': idmap,
    'MY_IP_TEST_LIVE': 'FALSE',
    'MY_IP_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['MY_IP_TEST_GET_IP_INFO_ENTID']

  const live = 'TRUE' === env.MY_IP_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MY_IP_TEST_GET_IP_INFO_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new MyIpSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.MY_IP_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
