<?php
declare(strict_types=1);

// MyIp SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

MyIpUtility::setRegistrar(function (MyIpUtility $u): void {
    $u->clean = [MyIpClean::class, 'call'];
    $u->done = [MyIpDone::class, 'call'];
    $u->make_error = [MyIpMakeError::class, 'call'];
    $u->feature_add = [MyIpFeatureAdd::class, 'call'];
    $u->feature_hook = [MyIpFeatureHook::class, 'call'];
    $u->feature_init = [MyIpFeatureInit::class, 'call'];
    $u->fetcher = [MyIpFetcher::class, 'call'];
    $u->make_fetch_def = [MyIpMakeFetchDef::class, 'call'];
    $u->make_context = [MyIpMakeContext::class, 'call'];
    $u->make_options = [MyIpMakeOptions::class, 'call'];
    $u->make_request = [MyIpMakeRequest::class, 'call'];
    $u->make_response = [MyIpMakeResponse::class, 'call'];
    $u->make_result = [MyIpMakeResult::class, 'call'];
    $u->make_point = [MyIpMakePoint::class, 'call'];
    $u->make_spec = [MyIpMakeSpec::class, 'call'];
    $u->make_url = [MyIpMakeUrl::class, 'call'];
    $u->param = [MyIpParam::class, 'call'];
    $u->prepare_auth = [MyIpPrepareAuth::class, 'call'];
    $u->prepare_body = [MyIpPrepareBody::class, 'call'];
    $u->prepare_headers = [MyIpPrepareHeaders::class, 'call'];
    $u->prepare_method = [MyIpPrepareMethod::class, 'call'];
    $u->prepare_params = [MyIpPrepareParams::class, 'call'];
    $u->prepare_path = [MyIpPreparePath::class, 'call'];
    $u->prepare_query = [MyIpPrepareQuery::class, 'call'];
    $u->result_basic = [MyIpResultBasic::class, 'call'];
    $u->result_body = [MyIpResultBody::class, 'call'];
    $u->result_headers = [MyIpResultHeaders::class, 'call'];
    $u->transform_request = [MyIpTransformRequest::class, 'call'];
    $u->transform_response = [MyIpTransformResponse::class, 'call'];
});
