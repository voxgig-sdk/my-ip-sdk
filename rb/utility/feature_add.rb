# MyIp SDK utility: feature_add
module MyIpUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
