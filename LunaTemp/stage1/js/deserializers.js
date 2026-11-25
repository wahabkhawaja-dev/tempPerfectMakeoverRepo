var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1890 = root || request.c( 'UnityEngine.JointSpring' )
  var i1891 = data
  i1890.spring = i1891[0]
  i1890.damper = i1891[1]
  i1890.targetPosition = i1891[2]
  return i1890
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1892 = root || request.c( 'UnityEngine.JointMotor' )
  var i1893 = data
  i1892.m_TargetVelocity = i1893[0]
  i1892.m_Force = i1893[1]
  i1892.m_FreeSpin = i1893[2]
  return i1892
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1894 = root || request.c( 'UnityEngine.JointLimits' )
  var i1895 = data
  i1894.m_Min = i1895[0]
  i1894.m_Max = i1895[1]
  i1894.m_Bounciness = i1895[2]
  i1894.m_BounceMinVelocity = i1895[3]
  i1894.m_ContactDistance = i1895[4]
  i1894.minBounce = i1895[5]
  i1894.maxBounce = i1895[6]
  return i1894
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1896 = root || request.c( 'UnityEngine.JointDrive' )
  var i1897 = data
  i1896.m_PositionSpring = i1897[0]
  i1896.m_PositionDamper = i1897[1]
  i1896.m_MaximumForce = i1897[2]
  i1896.m_UseAcceleration = i1897[3]
  return i1896
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1898 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1899 = data
  i1898.m_Spring = i1899[0]
  i1898.m_Damper = i1899[1]
  return i1898
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1900 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1901 = data
  i1900.m_Limit = i1901[0]
  i1900.m_Bounciness = i1901[1]
  i1900.m_ContactDistance = i1901[2]
  return i1900
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1902 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1903 = data
  i1902.m_ExtremumSlip = i1903[0]
  i1902.m_ExtremumValue = i1903[1]
  i1902.m_AsymptoteSlip = i1903[2]
  i1902.m_AsymptoteValue = i1903[3]
  i1902.m_Stiffness = i1903[4]
  return i1902
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1904 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1905 = data
  i1904.m_LowerAngle = i1905[0]
  i1904.m_UpperAngle = i1905[1]
  return i1904
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1906 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1907 = data
  i1906.m_MotorSpeed = i1907[0]
  i1906.m_MaximumMotorTorque = i1907[1]
  return i1906
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1908 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1909 = data
  i1908.m_DampingRatio = i1909[0]
  i1908.m_Frequency = i1909[1]
  i1908.m_Angle = i1909[2]
  return i1908
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1910 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1911 = data
  i1910.m_LowerTranslation = i1911[0]
  i1910.m_UpperTranslation = i1911[1]
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1912 = root || new pc.UnityMaterial()
  var i1913 = data
  i1912.name = i1913[0]
  request.r(i1913[1], i1913[2], 0, i1912, 'shader')
  i1912.renderQueue = i1913[3]
  i1912.enableInstancing = !!i1913[4]
  var i1915 = i1913[5]
  var i1914 = []
  for(var i = 0; i < i1915.length; i += 1) {
    i1914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1915[i + 0]) );
  }
  i1912.floatParameters = i1914
  var i1917 = i1913[6]
  var i1916 = []
  for(var i = 0; i < i1917.length; i += 1) {
    i1916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1917[i + 0]) );
  }
  i1912.colorParameters = i1916
  var i1919 = i1913[7]
  var i1918 = []
  for(var i = 0; i < i1919.length; i += 1) {
    i1918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1919[i + 0]) );
  }
  i1912.vectorParameters = i1918
  var i1921 = i1913[8]
  var i1920 = []
  for(var i = 0; i < i1921.length; i += 1) {
    i1920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1921[i + 0]) );
  }
  i1912.textureParameters = i1920
  var i1923 = i1913[9]
  var i1922 = []
  for(var i = 0; i < i1923.length; i += 1) {
    i1922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1923[i + 0]) );
  }
  i1912.materialFlags = i1922
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1927 = data
  i1926.name = i1927[0]
  i1926.value = i1927[1]
  return i1926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1931 = data
  i1930.name = i1931[0]
  i1930.value = new pc.Color(i1931[1], i1931[2], i1931[3], i1931[4])
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1935 = data
  i1934.name = i1935[0]
  i1934.value = new pc.Vec4( i1935[1], i1935[2], i1935[3], i1935[4] )
  return i1934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1939 = data
  i1938.name = i1939[0]
  request.r(i1939[1], i1939[2], 0, i1938, 'value')
  return i1938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1943 = data
  i1942.name = i1943[0]
  i1942.enabled = !!i1943[1]
  return i1942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1945 = data
  i1944.name = i1945[0]
  i1944.width = i1945[1]
  i1944.height = i1945[2]
  i1944.mipmapCount = i1945[3]
  i1944.anisoLevel = i1945[4]
  i1944.filterMode = i1945[5]
  i1944.hdr = !!i1945[6]
  i1944.format = i1945[7]
  i1944.wrapMode = i1945[8]
  i1944.alphaIsTransparency = !!i1945[9]
  i1944.alphaSource = i1945[10]
  i1944.graphicsFormat = i1945[11]
  i1944.sRGBTexture = !!i1945[12]
  i1944.desiredColorSpace = i1945[13]
  i1944.wrapU = i1945[14]
  i1944.wrapV = i1945[15]
  return i1944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1947 = data
  i1946.name = i1947[0]
  i1946.halfPrecision = !!i1947[1]
  i1946.useSimplification = !!i1947[2]
  i1946.useUInt32IndexFormat = !!i1947[3]
  i1946.vertexCount = i1947[4]
  i1946.aabb = i1947[5]
  var i1949 = i1947[6]
  var i1948 = []
  for(var i = 0; i < i1949.length; i += 1) {
    i1948.push( !!i1949[i + 0] );
  }
  i1946.streams = i1948
  i1946.vertices = i1947[7]
  var i1951 = i1947[8]
  var i1950 = []
  for(var i = 0; i < i1951.length; i += 1) {
    i1950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1951[i + 0]) );
  }
  i1946.subMeshes = i1950
  var i1953 = i1947[9]
  var i1952 = []
  for(var i = 0; i < i1953.length; i += 16) {
    i1952.push( new pc.Mat4().setData(i1953[i + 0], i1953[i + 1], i1953[i + 2], i1953[i + 3],  i1953[i + 4], i1953[i + 5], i1953[i + 6], i1953[i + 7],  i1953[i + 8], i1953[i + 9], i1953[i + 10], i1953[i + 11],  i1953[i + 12], i1953[i + 13], i1953[i + 14], i1953[i + 15]) );
  }
  i1946.bindposes = i1952
  var i1955 = i1947[10]
  var i1954 = []
  for(var i = 0; i < i1955.length; i += 1) {
    i1954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1955[i + 0]) );
  }
  i1946.blendShapes = i1954
  return i1946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1961 = data
  i1960.triangles = i1961[0]
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1967 = data
  i1966.name = i1967[0]
  var i1969 = i1967[1]
  var i1968 = []
  for(var i = 0; i < i1969.length; i += 1) {
    i1968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1969[i + 0]) );
  }
  i1966.frames = i1968
  return i1966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1971 = data
  i1970.position = new pc.Vec3( i1971[0], i1971[1], i1971[2] )
  i1970.scale = new pc.Vec3( i1971[3], i1971[4], i1971[5] )
  i1970.rotation = new pc.Quat(i1971[6], i1971[7], i1971[8], i1971[9])
  return i1970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1973 = data
  i1972.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1973[0], i1972.main)
  i1972.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1973[1], i1972.colorBySpeed)
  i1972.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1973[2], i1972.colorOverLifetime)
  i1972.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1973[3], i1972.emission)
  i1972.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1973[4], i1972.rotationBySpeed)
  i1972.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1973[5], i1972.rotationOverLifetime)
  i1972.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1973[6], i1972.shape)
  i1972.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1973[7], i1972.sizeBySpeed)
  i1972.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1973[8], i1972.sizeOverLifetime)
  i1972.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1973[9], i1972.textureSheetAnimation)
  i1972.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1973[10], i1972.velocityOverLifetime)
  i1972.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1973[11], i1972.noise)
  i1972.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1973[12], i1972.inheritVelocity)
  i1972.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1973[13], i1972.forceOverLifetime)
  i1972.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1973[14], i1972.limitVelocityOverLifetime)
  i1972.useAutoRandomSeed = !!i1973[15]
  i1972.randomSeed = i1973[16]
  return i1972
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1974 = root || new pc.ParticleSystemMain()
  var i1975 = data
  i1974.duration = i1975[0]
  i1974.loop = !!i1975[1]
  i1974.prewarm = !!i1975[2]
  i1974.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1975[3], i1974.startDelay)
  i1974.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1975[4], i1974.startLifetime)
  i1974.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1975[5], i1974.startSpeed)
  i1974.startSize3D = !!i1975[6]
  i1974.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1975[7], i1974.startSizeX)
  i1974.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1975[8], i1974.startSizeY)
  i1974.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1975[9], i1974.startSizeZ)
  i1974.startRotation3D = !!i1975[10]
  i1974.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1975[11], i1974.startRotationX)
  i1974.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1975[12], i1974.startRotationY)
  i1974.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1975[13], i1974.startRotationZ)
  i1974.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1975[14], i1974.startColor)
  i1974.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1975[15], i1974.gravityModifier)
  i1974.simulationSpace = i1975[16]
  request.r(i1975[17], i1975[18], 0, i1974, 'customSimulationSpace')
  i1974.simulationSpeed = i1975[19]
  i1974.useUnscaledTime = !!i1975[20]
  i1974.scalingMode = i1975[21]
  i1974.playOnAwake = !!i1975[22]
  i1974.maxParticles = i1975[23]
  i1974.emitterVelocityMode = i1975[24]
  i1974.stopAction = i1975[25]
  return i1974
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1976 = root || new pc.MinMaxCurve()
  var i1977 = data
  i1976.mode = i1977[0]
  i1976.curveMin = new pc.AnimationCurve( { keys_flow: i1977[1] } )
  i1976.curveMax = new pc.AnimationCurve( { keys_flow: i1977[2] } )
  i1976.curveMultiplier = i1977[3]
  i1976.constantMin = i1977[4]
  i1976.constantMax = i1977[5]
  return i1976
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1978 = root || new pc.MinMaxGradient()
  var i1979 = data
  i1978.mode = i1979[0]
  i1978.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1979[1], i1978.gradientMin)
  i1978.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1979[2], i1978.gradientMax)
  i1978.colorMin = new pc.Color(i1979[3], i1979[4], i1979[5], i1979[6])
  i1978.colorMax = new pc.Color(i1979[7], i1979[8], i1979[9], i1979[10])
  return i1978
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1981 = data
  i1980.mode = i1981[0]
  var i1983 = i1981[1]
  var i1982 = []
  for(var i = 0; i < i1983.length; i += 1) {
    i1982.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1983[i + 0]) );
  }
  i1980.colorKeys = i1982
  var i1985 = i1981[2]
  var i1984 = []
  for(var i = 0; i < i1985.length; i += 1) {
    i1984.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1985[i + 0]) );
  }
  i1980.alphaKeys = i1984
  return i1980
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1986 = root || new pc.ParticleSystemColorBySpeed()
  var i1987 = data
  i1986.enabled = !!i1987[0]
  i1986.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1987[1], i1986.color)
  i1986.range = new pc.Vec2( i1987[2], i1987[3] )
  return i1986
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1991 = data
  i1990.color = new pc.Color(i1991[0], i1991[1], i1991[2], i1991[3])
  i1990.time = i1991[4]
  return i1990
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1995 = data
  i1994.alpha = i1995[0]
  i1994.time = i1995[1]
  return i1994
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1996 = root || new pc.ParticleSystemColorOverLifetime()
  var i1997 = data
  i1996.enabled = !!i1997[0]
  i1996.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1997[1], i1996.color)
  return i1996
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1998 = root || new pc.ParticleSystemEmitter()
  var i1999 = data
  i1998.enabled = !!i1999[0]
  i1998.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1999[1], i1998.rateOverTime)
  i1998.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1999[2], i1998.rateOverDistance)
  var i2001 = i1999[3]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 1) {
    i2000.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2001[i + 0]) );
  }
  i1998.bursts = i2000
  return i1998
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2004 = root || new pc.ParticleSystemBurst()
  var i2005 = data
  i2004.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2005[0], i2004.count)
  i2004.cycleCount = i2005[1]
  i2004.minCount = i2005[2]
  i2004.maxCount = i2005[3]
  i2004.repeatInterval = i2005[4]
  i2004.time = i2005[5]
  return i2004
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2006 = root || new pc.ParticleSystemRotationBySpeed()
  var i2007 = data
  i2006.enabled = !!i2007[0]
  i2006.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2007[1], i2006.x)
  i2006.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2007[2], i2006.y)
  i2006.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2007[3], i2006.z)
  i2006.separateAxes = !!i2007[4]
  i2006.range = new pc.Vec2( i2007[5], i2007[6] )
  return i2006
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2008 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2009 = data
  i2008.enabled = !!i2009[0]
  i2008.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2009[1], i2008.x)
  i2008.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2009[2], i2008.y)
  i2008.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2009[3], i2008.z)
  i2008.separateAxes = !!i2009[4]
  return i2008
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2010 = root || new pc.ParticleSystemShape()
  var i2011 = data
  i2010.enabled = !!i2011[0]
  i2010.shapeType = i2011[1]
  i2010.randomDirectionAmount = i2011[2]
  i2010.sphericalDirectionAmount = i2011[3]
  i2010.randomPositionAmount = i2011[4]
  i2010.alignToDirection = !!i2011[5]
  i2010.radius = i2011[6]
  i2010.radiusMode = i2011[7]
  i2010.radiusSpread = i2011[8]
  i2010.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2011[9], i2010.radiusSpeed)
  i2010.radiusThickness = i2011[10]
  i2010.angle = i2011[11]
  i2010.length = i2011[12]
  i2010.boxThickness = new pc.Vec3( i2011[13], i2011[14], i2011[15] )
  i2010.meshShapeType = i2011[16]
  request.r(i2011[17], i2011[18], 0, i2010, 'mesh')
  request.r(i2011[19], i2011[20], 0, i2010, 'meshRenderer')
  request.r(i2011[21], i2011[22], 0, i2010, 'skinnedMeshRenderer')
  i2010.useMeshMaterialIndex = !!i2011[23]
  i2010.meshMaterialIndex = i2011[24]
  i2010.useMeshColors = !!i2011[25]
  i2010.normalOffset = i2011[26]
  i2010.arc = i2011[27]
  i2010.arcMode = i2011[28]
  i2010.arcSpread = i2011[29]
  i2010.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2011[30], i2010.arcSpeed)
  i2010.donutRadius = i2011[31]
  i2010.position = new pc.Vec3( i2011[32], i2011[33], i2011[34] )
  i2010.rotation = new pc.Vec3( i2011[35], i2011[36], i2011[37] )
  i2010.scale = new pc.Vec3( i2011[38], i2011[39], i2011[40] )
  return i2010
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2012 = root || new pc.ParticleSystemSizeBySpeed()
  var i2013 = data
  i2012.enabled = !!i2013[0]
  i2012.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2013[1], i2012.x)
  i2012.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2013[2], i2012.y)
  i2012.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2013[3], i2012.z)
  i2012.separateAxes = !!i2013[4]
  i2012.range = new pc.Vec2( i2013[5], i2013[6] )
  return i2012
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2014 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2015 = data
  i2014.enabled = !!i2015[0]
  i2014.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2015[1], i2014.x)
  i2014.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2015[2], i2014.y)
  i2014.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2015[3], i2014.z)
  i2014.separateAxes = !!i2015[4]
  return i2014
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2016 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2017 = data
  i2016.enabled = !!i2017[0]
  i2016.mode = i2017[1]
  i2016.animation = i2017[2]
  i2016.numTilesX = i2017[3]
  i2016.numTilesY = i2017[4]
  i2016.useRandomRow = !!i2017[5]
  i2016.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2017[6], i2016.frameOverTime)
  i2016.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2017[7], i2016.startFrame)
  i2016.cycleCount = i2017[8]
  i2016.rowIndex = i2017[9]
  i2016.flipU = i2017[10]
  i2016.flipV = i2017[11]
  i2016.spriteCount = i2017[12]
  var i2019 = i2017[13]
  var i2018 = []
  for(var i = 0; i < i2019.length; i += 2) {
  request.r(i2019[i + 0], i2019[i + 1], 2, i2018, '')
  }
  i2016.sprites = i2018
  return i2016
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2022 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2023 = data
  i2022.enabled = !!i2023[0]
  i2022.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2023[1], i2022.x)
  i2022.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2023[2], i2022.y)
  i2022.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2023[3], i2022.z)
  i2022.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2023[4], i2022.radial)
  i2022.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2023[5], i2022.speedModifier)
  i2022.space = i2023[6]
  i2022.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2023[7], i2022.orbitalX)
  i2022.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2023[8], i2022.orbitalY)
  i2022.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2023[9], i2022.orbitalZ)
  i2022.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2023[10], i2022.orbitalOffsetX)
  i2022.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2023[11], i2022.orbitalOffsetY)
  i2022.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2023[12], i2022.orbitalOffsetZ)
  return i2022
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2024 = root || new pc.ParticleSystemNoise()
  var i2025 = data
  i2024.enabled = !!i2025[0]
  i2024.separateAxes = !!i2025[1]
  i2024.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2025[2], i2024.strengthX)
  i2024.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2025[3], i2024.strengthY)
  i2024.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2025[4], i2024.strengthZ)
  i2024.frequency = i2025[5]
  i2024.damping = !!i2025[6]
  i2024.octaveCount = i2025[7]
  i2024.octaveMultiplier = i2025[8]
  i2024.octaveScale = i2025[9]
  i2024.quality = i2025[10]
  i2024.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2025[11], i2024.scrollSpeed)
  i2024.scrollSpeedMultiplier = i2025[12]
  i2024.remapEnabled = !!i2025[13]
  i2024.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2025[14], i2024.remapX)
  i2024.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2025[15], i2024.remapY)
  i2024.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2025[16], i2024.remapZ)
  i2024.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2025[17], i2024.positionAmount)
  i2024.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2025[18], i2024.rotationAmount)
  i2024.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2025[19], i2024.sizeAmount)
  return i2024
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2026 = root || new pc.ParticleSystemInheritVelocity()
  var i2027 = data
  i2026.enabled = !!i2027[0]
  i2026.mode = i2027[1]
  i2026.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2027[2], i2026.curve)
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2028 = root || new pc.ParticleSystemForceOverLifetime()
  var i2029 = data
  i2028.enabled = !!i2029[0]
  i2028.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2029[1], i2028.x)
  i2028.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2029[2], i2028.y)
  i2028.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2029[3], i2028.z)
  i2028.space = i2029[4]
  i2028.randomized = !!i2029[5]
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2030 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2031 = data
  i2030.enabled = !!i2031[0]
  i2030.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2031[1], i2030.limit)
  i2030.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2031[2], i2030.limitX)
  i2030.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2031[3], i2030.limitY)
  i2030.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2031[4], i2030.limitZ)
  i2030.dampen = i2031[5]
  i2030.separateAxes = !!i2031[6]
  i2030.space = i2031[7]
  i2030.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2031[8], i2030.drag)
  i2030.multiplyDragByParticleSize = !!i2031[9]
  i2030.multiplyDragByParticleVelocity = !!i2031[10]
  return i2030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2033 = data
  request.r(i2033[0], i2033[1], 0, i2032, 'mesh')
  i2032.meshCount = i2033[2]
  i2032.activeVertexStreamsCount = i2033[3]
  i2032.alignment = i2033[4]
  i2032.renderMode = i2033[5]
  i2032.sortMode = i2033[6]
  i2032.lengthScale = i2033[7]
  i2032.velocityScale = i2033[8]
  i2032.cameraVelocityScale = i2033[9]
  i2032.normalDirection = i2033[10]
  i2032.sortingFudge = i2033[11]
  i2032.minParticleSize = i2033[12]
  i2032.maxParticleSize = i2033[13]
  i2032.pivot = new pc.Vec3( i2033[14], i2033[15], i2033[16] )
  request.r(i2033[17], i2033[18], 0, i2032, 'trailMaterial')
  i2032.applyActiveColorSpace = !!i2033[19]
  i2032.enabled = !!i2033[20]
  request.r(i2033[21], i2033[22], 0, i2032, 'sharedMaterial')
  var i2035 = i2033[23]
  var i2034 = []
  for(var i = 0; i < i2035.length; i += 2) {
  request.r(i2035[i + 0], i2035[i + 1], 2, i2034, '')
  }
  i2032.sharedMaterials = i2034
  i2032.receiveShadows = !!i2033[24]
  i2032.shadowCastingMode = i2033[25]
  i2032.sortingLayerID = i2033[26]
  i2032.sortingOrder = i2033[27]
  i2032.lightmapIndex = i2033[28]
  i2032.lightmapSceneIndex = i2033[29]
  i2032.lightmapScaleOffset = new pc.Vec4( i2033[30], i2033[31], i2033[32], i2033[33] )
  i2032.lightProbeUsage = i2033[34]
  i2032.reflectionProbeUsage = i2033[35]
  return i2032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2039 = data
  i2038.name = i2039[0]
  i2038.tagId = i2039[1]
  i2038.enabled = !!i2039[2]
  i2038.isStatic = !!i2039[3]
  i2038.layer = i2039[4]
  return i2038
}

Deserializers["Level1_Cloth_Playable_PlayableStep4"] = function (request, data, root) {
  var i2040 = root || request.c( 'Level1_Cloth_Playable_PlayableStep4' )
  var i2041 = data
  request.r(i2041[0], i2041[1], 0, i2040, 'WashingView')
  request.r(i2041[2], i2041[3], 0, i2040, 'WashingTools')
  request.r(i2041[4], i2041[5], 0, i2040, 'DressingView')
  request.r(i2041[6], i2041[7], 0, i2040, 'DressingTools')
  i2040.ZoomStep1 = request.d('ZoomPos', i2041[8], i2040.ZoomStep1)
  request.r(i2041[9], i2041[10], 0, i2040, 'ToolStep1')
  request.r(i2041[11], i2041[12], 0, i2040, 'Basket_Cloth')
  request.r(i2041[13], i2041[14], 0, i2040, 'clothInside')
  request.r(i2041[15], i2041[16], 0, i2040, 'clothRound')
  request.r(i2041[17], i2041[18], 0, i2040, 'machineDoor')
  request.r(i2041[19], i2041[20], 0, i2040, 'machineGlass')
  i2040.ZoomStep2 = request.d('ZoomPos', i2041[21], i2040.ZoomStep2)
  i2040.ZoomStep2b = request.d('ZoomPos', i2041[22], i2040.ZoomStep2b)
  request.r(i2041[23], i2041[24], 0, i2040, 'ToolStep2')
  request.r(i2041[25], i2041[26], 0, i2040, 'ToolStep2CamFollow')
  request.r(i2041[27], i2041[28], 0, i2040, 'drawerObj')
  request.r(i2041[29], i2041[30], 0, i2040, 'surfObj')
  request.r(i2041[31], i2041[32], 0, i2040, 'surfPackTop')
  request.r(i2041[33], i2041[34], 0, i2040, 'handStep2')
  request.r(i2041[35], i2041[36], 0, i2040, 'surfController')
  request.r(i2041[37], i2041[38], 0, i2040, 'clothsInside')
  request.r(i2041[39], i2041[40], 0, i2040, 'clothsInsideGlass')
  request.r(i2041[41], i2041[42], 0, i2040, 'clothsStaticClean')
  request.r(i2041[43], i2041[44], 0, i2040, 'wetCloths')
  request.r(i2041[45], i2041[46], 0, i2040, 'clothCleanInside')
  request.r(i2041[47], i2041[48], 0, i2040, 'clothCleanInsideAnim')
  request.r(i2041[49], i2041[50], 0, i2040, 'waterWave')
  request.r(i2041[51], i2041[52], 0, i2040, 'clothCleanInside2')
  request.r(i2041[53], i2041[54], 0, i2040, 'clothCleanInside2Cam')
  request.r(i2041[55], i2041[56], 0, i2040, 'clothBasketTarget')
  request.r(i2041[57], i2041[58], 0, i2040, 'clothBasketTarget2')
  request.r(i2041[59], i2041[60], 0, i2040, 'waterSplash_Vfx')
  request.r(i2041[61], i2041[62], 0, i2040, 'countDownTimerText')
  i2040.countDown = i2041[63]
  request.r(i2041[64], i2041[65], 0, i2040, 'machineTimer')
  request.r(i2041[66], i2041[67], 0, i2040, 'machineTimerIndication')
  request.r(i2041[68], i2041[69], 0, i2040, 'darazOpenSfx')
  request.r(i2041[70], i2041[71], 0, i2040, 'darazCloseSfx')
  request.r(i2041[72], i2041[73], 0, i2040, 'doorOpenSfx')
  request.r(i2041[74], i2041[75], 0, i2040, 'machineStartSfx')
  request.r(i2041[76], i2041[77], 0, i2040, 'machineFinishSfx')
  request.r(i2041[78], i2041[79], 0, i2040, 'waterDrainSfx')
  i2040.ZoomStep3a = request.d('ZoomPos', i2041[80], i2040.ZoomStep3a)
  request.r(i2041[81], i2041[82], 0, i2040, 'ToolStep3a')
  request.r(i2041[83], i2041[84], 0, i2040, 'ToolStep3aRend')
  request.r(i2041[85], i2041[86], 0, i2040, 'dressingBasket')
  request.r(i2041[87], i2041[88], 0, i2040, 'dummyFullParent')
  request.r(i2041[89], i2041[90], 0, i2040, 'DressParent')
  i2040.ZoomStep3 = request.d('ZoomPos', i2041[91], i2040.ZoomStep3)
  request.r(i2041[92], i2041[93], 0, i2040, 'ToolStep3')
  request.r(i2041[94], i2041[95], 0, i2040, 'tornPatch')
  request.r(i2041[96], i2041[97], 0, i2040, 'patchCompleted')
  request.r(i2041[98], i2041[99], 0, i2040, 'patchOutline')
  i2040.ZoomStep4 = request.d('ZoomPos', i2041[100], i2040.ZoomStep4)
  request.r(i2041[101], i2041[102], 0, i2040, 'ToolStep4')
  request.r(i2041[103], i2041[104], 0, i2040, 'camFollowStep4')
  request.r(i2041[105], i2041[106], 0, i2040, 'SteamerBottom')
  i2040.levelName = i2041[107]
  i2040.levelReward = i2041[108]
  request.r(i2041[109], i2041[110], 0, i2040, 'LevelIcon')
  request.r(i2041[111], i2041[112], 0, i2040, 'Level_BG')
  var i2043 = i2041[113]
  var i2042 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2043.length; i += 2) {
  request.r(i2043[i + 0], i2043[i + 1], 1, i2042, '')
  }
  i2040.ToolIcons = i2042
  var i2045 = i2041[114]
  var i2044 = []
  for(var i = 0; i < i2045.length; i += 2) {
  request.r(i2045[i + 0], i2045[i + 1], 2, i2044, '')
  }
  i2040.AllDrags = i2044
  var i2047 = i2041[115]
  var i2046 = []
  for(var i = 0; i < i2047.length; i += 2) {
  request.r(i2047[i + 0], i2047[i + 1], 2, i2046, '')
  }
  i2040.AllSources = i2046
  var i2049 = i2041[116]
  var i2048 = []
  for(var i = 0; i < i2049.length; i += 2) {
  request.r(i2049[i + 0], i2049[i + 1], 2, i2048, '')
  }
  i2040.AllScratches = i2048
  i2040.stepsDone = i2041[117]
  i2040.levelNo = i2041[118]
  i2040.partNo = i2041[119]
  var i2051 = i2041[120]
  var i2050 = []
  for(var i = 0; i < i2051.length; i += 2) {
  request.r(i2051[i + 0], i2051[i + 1], 2, i2050, '')
  }
  i2040.disableOnLevelComplete = i2050
  i2040.zoomBeforeComplete = !!i2041[121]
  i2040.completionZoom = request.d('ZoomPos', i2041[122], i2040.completionZoom)
  i2040.completionZoomDuration = i2041[123]
  request.r(i2041[124], i2041[125], 0, i2040, 'clothSfx')
  request.r(i2041[126], i2041[127], 0, i2040, 'doorCloseSfx')
  return i2040
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i2052 = root || request.c( 'ZoomPos' )
  var i2053 = data
  i2052.CameraPos = new pc.Vec3( i2053[0], i2053[1], i2053[2] )
  i2052.CameraFOV = i2053[3]
  return i2052
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i2064 = root || request.c( 'PlayableCTA' )
  var i2065 = data
  i2064.trigger = i2065[0]
  i2064.autoCtaOnLevelComplete = !!i2065[1]
  i2064.afterSeconds = i2065[2]
  i2064.afterTaps = i2065[3]
  request.r(i2065[4], i2065[5], 0, i2064, 'scratchProgress')
  i2064.scratchIndex = i2065[6]
  i2064.progressThreshold = i2065[7]
  i2064.blockInputOnFire = !!i2065[8]
  i2064.refireOnEveryTap = !!i2065[9]
  i2064.refireDelay = i2065[10]
  i2064.showEndCard = !!i2065[11]
  request.r(i2065[12], i2065[13], 0, i2064, 'endCard')
  var i2067 = i2065[14]
  var i2066 = []
  for(var i = 0; i < i2067.length; i += 2) {
  request.r(i2067[i + 0], i2067[i + 1], 2, i2066, '')
  }
  i2064.thingsToDisableOnEndCard = i2066
  i2064.endCardDelay = i2065[15]
  i2064.showEndCardOnProgressTrigger = !!i2065[16]
  i2064.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i2065[17], i2064.onCtaFired)
  i2064.logWhenFired = !!i2065[18]
  return i2064
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2068 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2069 = data
  i2068.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2069[0], i2068.m_PersistentCalls)
  return i2068
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2070 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2071 = data
  var i2073 = i2071[0]
  var i2072 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2073.length; i += 1) {
    i2072.add(request.d('UnityEngine.Events.PersistentCall', i2073[i + 0]));
  }
  i2070.m_Calls = i2072
  return i2070
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2076 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2077 = data
  request.r(i2077[0], i2077[1], 0, i2076, 'm_Target')
  i2076.m_TargetAssemblyTypeName = i2077[2]
  i2076.m_MethodName = i2077[3]
  i2076.m_Mode = i2077[4]
  i2076.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2077[5], i2076.m_Arguments)
  i2076.m_CallState = i2077[6]
  return i2076
}

Deserializers["PlayableFadeCoverSettings"] = function (request, data, root) {
  var i2078 = root || request.c( 'PlayableFadeCoverSettings' )
  var i2079 = data
  i2078.revealDelay = i2079[0]
  i2078.revealDuration = i2079[1]
  return i2078
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i2080 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i2081 = data
  request.r(i2081[0], i2081[1], 0, i2080, 'MainCamera')
  i2080.RenderType = i2081[2]
  request.r(i2081[3], i2081[4], 0, i2080, 'ScratchSurfaceSprite')
  i2080.ScratchSurfaceSpriteHasAlpha = !!i2081[5]
  i2080.MaskProgressCutOffValue = i2081[6]
  request.r(i2081[7], i2081[8], 0, i2080, 'EraseTexture')
  i2080.EraseTextureScale = new pc.Vec2( i2081[9], i2081[10] )
  i2080.InputEnabled = !!i2081[11]
  request.r(i2081[12], i2081[13], 0, i2080, 'Card')
  i2080.Mode = i2081[14]
  request.r(i2081[15], i2081[16], 0, i2080, 'Progress')
  request.r(i2081[17], i2081[18], 0, i2080, 'MeshCard')
  request.r(i2081[19], i2081[20], 0, i2080, 'SpriteCard')
  request.r(i2081[21], i2081[22], 0, i2080, 'ImageCard')
  request.r(i2081[23], i2081[24], 0, i2080, 'MaskShader')
  request.r(i2081[25], i2081[26], 0, i2080, 'BrushShader')
  request.r(i2081[27], i2081[28], 0, i2080, 'MaskProgressShader')
  request.r(i2081[29], i2081[30], 0, i2080, 'MaskProgressCutOffShader')
  return i2080
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i2082 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i2083 = data
  request.r(i2083[0], i2083[1], 0, i2082, 'MainCamera')
  request.r(i2083[2], i2083[3], 0, i2082, 'Surface')
  i2082.RenderTextureQuality = i2083[4]
  request.r(i2083[5], i2083[6], 0, i2082, 'Eraser')
  request.r(i2083[7], i2083[8], 0, i2082, 'Progress')
  request.r(i2083[9], i2083[10], 0, i2082, 'ScratchSurface')
  request.r(i2083[11], i2083[12], 0, i2082, 'RenderTexture')
  i2082.BrushScale = new pc.Vec2( i2083[13], i2083[14] )
  request.r(i2083[15], i2083[16], 0, i2082, 'ToolTip')
  i2082.InputEnabled = !!i2083[17]
  i2082.IsScratching = !!i2083[18]
  i2082.useChangingScale = !!i2083[19]
  i2082.useGivenBrushScale = !!i2083[20]
  i2082.canSpreadMask = !!i2083[21]
  i2082.shouldPaintHoles = !!i2083[22]
  i2082.canRotateTip = !!i2083[23]
  i2082._mode = i2083[24]
  return i2082
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i2084 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i2085 = data
  request.r(i2085[0], i2085[1], 0, i2084, 'Card')
  i2084.currentProgress = i2085[2]
  return i2084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2087 = data
  i2086.color = new pc.Color(i2087[0], i2087[1], i2087[2], i2087[3])
  request.r(i2087[4], i2087[5], 0, i2086, 'sprite')
  i2086.flipX = !!i2087[6]
  i2086.flipY = !!i2087[7]
  i2086.drawMode = i2087[8]
  i2086.size = new pc.Vec2( i2087[9], i2087[10] )
  i2086.tileMode = i2087[11]
  i2086.adaptiveModeThreshold = i2087[12]
  i2086.maskInteraction = i2087[13]
  i2086.spriteSortPoint = i2087[14]
  i2086.enabled = !!i2087[15]
  request.r(i2087[16], i2087[17], 0, i2086, 'sharedMaterial')
  var i2089 = i2087[18]
  var i2088 = []
  for(var i = 0; i < i2089.length; i += 2) {
  request.r(i2089[i + 0], i2089[i + 1], 2, i2088, '')
  }
  i2086.sharedMaterials = i2088
  i2086.receiveShadows = !!i2087[19]
  i2086.shadowCastingMode = i2087[20]
  i2086.sortingLayerID = i2087[21]
  i2086.sortingOrder = i2087[22]
  i2086.lightmapIndex = i2087[23]
  i2086.lightmapSceneIndex = i2087[24]
  i2086.lightmapScaleOffset = new pc.Vec4( i2087[25], i2087[26], i2087[27], i2087[28] )
  i2086.lightProbeUsage = i2087[29]
  i2086.reflectionProbeUsage = i2087[30]
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2091 = data
  i2090.pivot = new pc.Vec2( i2091[0], i2091[1] )
  i2090.anchorMin = new pc.Vec2( i2091[2], i2091[3] )
  i2090.anchorMax = new pc.Vec2( i2091[4], i2091[5] )
  i2090.sizeDelta = new pc.Vec2( i2091[6], i2091[7] )
  i2090.anchoredPosition3D = new pc.Vec3( i2091[8], i2091[9], i2091[10] )
  i2090.rotation = new pc.Quat(i2091[11], i2091[12], i2091[13], i2091[14])
  i2090.scale = new pc.Vec3( i2091[15], i2091[16], i2091[17] )
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2093 = data
  i2092.planeDistance = i2093[0]
  i2092.referencePixelsPerUnit = i2093[1]
  i2092.isFallbackOverlay = !!i2093[2]
  i2092.renderMode = i2093[3]
  i2092.renderOrder = i2093[4]
  i2092.sortingLayerName = i2093[5]
  i2092.sortingOrder = i2093[6]
  i2092.scaleFactor = i2093[7]
  request.r(i2093[8], i2093[9], 0, i2092, 'worldCamera')
  i2092.overrideSorting = !!i2093[10]
  i2092.pixelPerfect = !!i2093[11]
  i2092.targetDisplay = i2093[12]
  i2092.overridePixelPerfect = !!i2093[13]
  i2092.enabled = !!i2093[14]
  return i2092
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2094 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2095 = data
  i2094.m_UiScaleMode = i2095[0]
  i2094.m_ReferencePixelsPerUnit = i2095[1]
  i2094.m_ScaleFactor = i2095[2]
  i2094.m_ReferenceResolution = new pc.Vec2( i2095[3], i2095[4] )
  i2094.m_ScreenMatchMode = i2095[5]
  i2094.m_MatchWidthOrHeight = i2095[6]
  i2094.m_PhysicalUnit = i2095[7]
  i2094.m_FallbackScreenDPI = i2095[8]
  i2094.m_DefaultSpriteDPI = i2095[9]
  i2094.m_DynamicPixelsPerUnit = i2095[10]
  i2094.m_PresetInfoIsWorld = !!i2095[11]
  return i2094
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2096 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2097 = data
  i2096.m_IgnoreReversedGraphics = !!i2097[0]
  i2096.m_BlockingObjects = i2097[1]
  i2096.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2097[2] )
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2099 = data
  i2098.usedByComposite = !!i2099[0]
  i2098.autoTiling = !!i2099[1]
  i2098.size = new pc.Vec2( i2099[2], i2099[3] )
  i2098.edgeRadius = i2099[4]
  i2098.enabled = !!i2099[5]
  i2098.isTrigger = !!i2099[6]
  i2098.usedByEffector = !!i2099[7]
  i2098.density = i2099[8]
  i2098.offset = new pc.Vec2( i2099[9], i2099[10] )
  request.r(i2099[11], i2099[12], 0, i2098, 'material')
  return i2098
}

Deserializers["RotaryTimerKnob"] = function (request, data, root) {
  var i2100 = root || request.c( 'RotaryTimerKnob' )
  var i2101 = data
  i2100.numSteps = i2101[0]
  i2100.onlyClockwise = !!i2101[1]
  request.r(i2101[2], i2101[3], 0, i2100, 'clickSound')
  i2100.enableVibration = !!i2101[4]
  request.r(i2101[5], i2101[6], 0, i2100, 'stepText')
  i2100.OnComplete = request.d('UnityEngine.Events.UnityEvent', i2101[7], i2100.OnComplete)
  request.r(i2101[8], i2101[9], 0, i2100, 'handIndication')
  return i2100
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2102 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2103 = data
  request.r(i2103[0], i2103[1], 0, i2102, 'm_ObjectArgument')
  i2102.m_ObjectArgumentAssemblyTypeName = i2103[2]
  i2102.m_IntArgument = i2103[3]
  i2102.m_FloatArgument = i2103[4]
  i2102.m_StringArgument = i2103[5]
  i2102.m_BoolArgument = !!i2103[6]
  return i2102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2105 = data
  request.r(i2105[0], i2105[1], 0, i2104, 'additionalVertexStreams')
  i2104.enabled = !!i2105[2]
  request.r(i2105[3], i2105[4], 0, i2104, 'sharedMaterial')
  var i2107 = i2105[5]
  var i2106 = []
  for(var i = 0; i < i2107.length; i += 2) {
  request.r(i2107[i + 0], i2107[i + 1], 2, i2106, '')
  }
  i2104.sharedMaterials = i2106
  i2104.receiveShadows = !!i2105[6]
  i2104.shadowCastingMode = i2105[7]
  i2104.sortingLayerID = i2105[8]
  i2104.sortingOrder = i2105[9]
  i2104.lightmapIndex = i2105[10]
  i2104.lightmapSceneIndex = i2105[11]
  i2104.lightmapScaleOffset = new pc.Vec4( i2105[12], i2105[13], i2105[14], i2105[15] )
  i2104.lightProbeUsage = i2105[16]
  i2104.reflectionProbeUsage = i2105[17]
  return i2104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2109 = data
  i2108.cullTransparentMesh = !!i2109[0]
  return i2108
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2110 = root || request.c( 'UnityEngine.UI.Text' )
  var i2111 = data
  i2110.m_FontData = request.d('UnityEngine.UI.FontData', i2111[0], i2110.m_FontData)
  i2110.m_Text = i2111[1]
  request.r(i2111[2], i2111[3], 0, i2110, 'm_Material')
  i2110.m_Maskable = !!i2111[4]
  i2110.m_Color = new pc.Color(i2111[5], i2111[6], i2111[7], i2111[8])
  i2110.m_RaycastTarget = !!i2111[9]
  i2110.m_RaycastPadding = new pc.Vec4( i2111[10], i2111[11], i2111[12], i2111[13] )
  return i2110
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2112 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2113 = data
  request.r(i2113[0], i2113[1], 0, i2112, 'm_Font')
  i2112.m_FontSize = i2113[2]
  i2112.m_FontStyle = i2113[3]
  i2112.m_BestFit = !!i2113[4]
  i2112.m_MinSize = i2113[5]
  i2112.m_MaxSize = i2113[6]
  i2112.m_Alignment = i2113[7]
  i2112.m_AlignByGeometry = !!i2113[8]
  i2112.m_RichText = !!i2113[9]
  i2112.m_HorizontalOverflow = i2113[10]
  i2112.m_VerticalOverflow = i2113[11]
  i2112.m_LineSpacing = i2113[12]
  return i2112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2115 = data
  request.r(i2115[0], i2115[1], 0, i2114, 'animatorController')
  request.r(i2115[2], i2115[3], 0, i2114, 'avatar')
  i2114.updateMode = i2115[4]
  i2114.hasTransformHierarchy = !!i2115[5]
  i2114.applyRootMotion = !!i2115[6]
  var i2117 = i2115[7]
  var i2116 = []
  for(var i = 0; i < i2117.length; i += 2) {
  request.r(i2117[i + 0], i2117[i + 1], 2, i2116, '')
  }
  i2114.humanBones = i2116
  i2114.enabled = !!i2115[8]
  return i2114
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i2120 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i2121 = data
  request.r(i2121[0], i2121[1], 0, i2120, 'm_RootBone')
  var i2123 = i2121[2]
  var i2122 = []
  for(var i = 0; i < i2123.length; i += 2) {
  request.r(i2123[i + 0], i2123[i + 1], 2, i2122, '')
  }
  i2120.m_BoneTransforms = i2122
  i2120.m_AlwaysUpdate = !!i2121[3]
  i2120.m_AutoRebind = !!i2121[4]
  return i2120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i2124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i2125 = data
  i2124.frontSortingLayerID = i2125[0]
  i2124.frontSortingOrder = i2125[1]
  i2124.backSortingLayerID = i2125[2]
  i2124.backSortingOrder = i2125[3]
  i2124.alphaCutoff = i2125[4]
  request.r(i2125[5], i2125[6], 0, i2124, 'sprite')
  i2124.tileMode = i2125[7]
  i2124.isCustomRangeActive = !!i2125[8]
  i2124.spriteSortPoint = i2125[9]
  i2124.enabled = !!i2125[10]
  request.r(i2125[11], i2125[12], 0, i2124, 'sharedMaterial')
  var i2127 = i2125[13]
  var i2126 = []
  for(var i = 0; i < i2127.length; i += 2) {
  request.r(i2127[i + 0], i2127[i + 1], 2, i2126, '')
  }
  i2124.sharedMaterials = i2126
  i2124.receiveShadows = !!i2125[14]
  i2124.shadowCastingMode = i2125[15]
  i2124.sortingLayerID = i2125[16]
  i2124.sortingOrder = i2125[17]
  i2124.lightmapIndex = i2125[18]
  i2124.lightmapSceneIndex = i2125[19]
  i2124.lightmapScaleOffset = new pc.Vec4( i2125[20], i2125[21], i2125[22], i2125[23] )
  i2124.lightProbeUsage = i2125[24]
  i2124.reflectionProbeUsage = i2125[25]
  return i2124
}

Deserializers["_2dxFX_Wave"] = function (request, data, root) {
  var i2128 = root || request.c( '_2dxFX_Wave' )
  var i2129 = data
  request.r(i2129[0], i2129[1], 0, i2128, 'ForceMaterial')
  i2128.ActiveChange = !!i2129[2]
  i2128._Alpha = i2129[3]
  i2128._OffsetX = i2129[4]
  i2128._OffsetY = i2129[5]
  i2128._DistanceX = i2129[6]
  i2128._DistanceY = i2129[7]
  i2128._WaveTimeX = i2129[8]
  i2128._WaveTimeY = i2129[9]
  i2128.AutoPlayWaveX = !!i2129[10]
  i2128.AutoPlaySpeedX = i2129[11]
  i2128.AutoPlayWaveY = !!i2129[12]
  i2128.AutoPlaySpeedY = i2129[13]
  i2128.AutoRandom = !!i2129[14]
  i2128.AutoRandomRange = i2129[15]
  i2128.ShaderChange = i2129[16]
  return i2128
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i2130 = root || request.c( 'BasicDrag' )
  var i2131 = data
  i2130.canDrag = !!i2131[0]
  i2130.dragByDelta = !!i2131[1]
  i2130.isDragging = !!i2131[2]
  i2130.moveWithPointer = !!i2131[3]
  i2130.canReturn = !!i2131[4]
  i2130.jumpOnReturn = !!i2131[5]
  i2130.returnTime = i2131[6]
  i2130.Tool_Offset = new pc.Vec3( i2131[7], i2131[8], i2131[9] )
  i2130.canScaleIncrease = !!i2131[10]
  i2130.Self_ScaleNew = new pc.Vec3( i2131[11], i2131[12], i2131[13] )
  i2130.canRotateOnPick = !!i2131[14]
  i2130.startRot = new pc.Vec3( i2131[15], i2131[16], i2131[17] )
  i2130.newRot = new pc.Vec3( i2131[18], i2131[19], i2131[20] )
  var i2133 = i2131[21]
  var i2132 = []
  for(var i = 0; i < i2133.length; i += 2) {
  request.r(i2133[i + 0], i2133[i + 1], 2, i2132, '')
  }
  i2130.childSprite = i2132
  request.r(i2131[22], i2131[23], 0, i2130, 'ToolSelectClip')
  request.r(i2131[24], i2131[25], 0, i2130, 'ToolLoopClip')
  request.r(i2131[26], i2131[27], 0, i2130, 'thisParticles')
  i2130.onDragparticle = !!i2131[28]
  request.r(i2131[29], i2131[30], 0, i2130, 'dragParticles')
  request.r(i2131[31], i2131[32], 0, i2130, 'anim')
  i2130.startPos = new pc.Vec3( i2131[33], i2131[34], i2131[35] )
  i2130.startScale = new pc.Vec3( i2131[36], i2131[37], i2131[38] )
  i2130.Vibration = !!i2131[39]
  i2130.isPlacedCannotMove = !!i2131[40]
  i2130.isObjectMovingWhileDragging = !!i2131[41]
  i2130.OnMouseDownEvent = request.d('System.Action', i2131[42], i2130.OnMouseDownEvent)
  i2130.OnMouseUpEvent = request.d('System.Action', i2131[43], i2130.OnMouseUpEvent)
  i2130.ProgStartEvent = request.d('System.Action', i2131[44], i2130.ProgStartEvent)
  i2130.ProgEndEvent = request.d('System.Action', i2131[45], i2130.ProgEndEvent)
  i2130.canCallMouseUpWhenGamePaused = !!i2131[46]
  i2130.ClampX_L = i2131[47]
  i2130.ClampX_H = i2131[48]
  i2130.ClampY_L = i2131[49]
  i2130.ClampY_H = i2131[50]
  i2130.startOrder = i2131[51]
  i2130.dontResetItIsInCollider = !!i2131[52]
  request.r(i2131[53], i2131[54], 0, i2130, 'thisCollider')
  request.r(i2131[55], i2131[56], 0, i2130, 'thisSR')
  i2130.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i2131[57], i2130.OnMouseDownEventIndependentFromCanDrag)
  return i2130
}

Deserializers["System.Action"] = function (request, data, root) {
  var i2136 = root || request.c( 'System.Action' )
  var i2137 = data
  return i2136
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i2138 = root || request.c( 'BD_Clamp' )
  var i2139 = data
  i2138.ClampX_L = i2139[0]
  i2138.ClampX_H = i2139[1]
  i2138.ClampY_L = i2139[2]
  i2138.ClampY_H = i2139[3]
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i2140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i2141 = data
  i2140.bodyType = i2141[0]
  request.r(i2141[1], i2141[2], 0, i2140, 'material')
  i2140.simulated = !!i2141[3]
  i2140.useAutoMass = !!i2141[4]
  i2140.mass = i2141[5]
  i2140.drag = i2141[6]
  i2140.angularDrag = i2141[7]
  i2140.gravityScale = i2141[8]
  i2140.collisionDetectionMode = i2141[9]
  i2140.sleepMode = i2141[10]
  i2140.constraints = i2141[11]
  return i2140
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i2142 = root || request.c( 'PlaceItem' )
  var i2143 = data
  request.r(i2143[0], i2143[1], 0, i2142, 'thisDrag')
  request.r(i2143[2], i2143[3], 0, i2142, 'Target')
  request.r(i2143[4], i2143[5], 0, i2142, 'Clip')
  i2142.jumpOnPlace = !!i2143[6]
  i2142.jumpHeight = i2143[7]
  i2142.jumpDuration = i2143[8]
  i2142.settleDuration = i2143[9]
  i2142.isPlaced = !!i2143[10]
  i2142.isInsideCollider = !!i2143[11]
  i2142.changeScaleOnPlace = !!i2143[12]
  request.r(i2143[13], i2143[14], 0, i2142, 'item')
  i2142.newScaleOnPlace = new pc.Vec3( i2143[15], i2143[16], i2143[17] )
  i2142.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i2143[18], i2142.OnPlaced)
  return i2142
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i2144 = root || request.c( 'ActionOnTap' )
  var i2145 = data
  i2144.OnTap = request.d('UnityEngine.Events.UnityEvent', i2145[0], i2144.OnTap)
  i2144.OnTapExtra = request.d('System.Action', i2145[1], i2144.OnTapExtra)
  return i2144
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2146 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2147 = data
  i2146.targetIsSelf = !!i2147[0]
  request.r(i2147[1], i2147[2], 0, i2146, 'targetGO')
  i2146.tweenTargetIsTargetGO = !!i2147[3]
  i2146.delay = i2147[4]
  i2146.duration = i2147[5]
  i2146.easeType = i2147[6]
  i2146.easeCurve = new pc.AnimationCurve( { keys_flow: i2147[7] } )
  i2146.loopType = i2147[8]
  i2146.loops = i2147[9]
  i2146.id = i2147[10]
  i2146.isRelative = !!i2147[11]
  i2146.isFrom = !!i2147[12]
  i2146.isIndependentUpdate = !!i2147[13]
  i2146.autoKill = !!i2147[14]
  i2146.autoGenerate = !!i2147[15]
  i2146.isActive = !!i2147[16]
  i2146.isValid = !!i2147[17]
  request.r(i2147[18], i2147[19], 0, i2146, 'target')
  i2146.animationType = i2147[20]
  i2146.targetType = i2147[21]
  i2146.forcedTargetType = i2147[22]
  i2146.autoPlay = !!i2147[23]
  i2146.useTargetAsV3 = !!i2147[24]
  i2146.endValueFloat = i2147[25]
  i2146.endValueV3 = new pc.Vec3( i2147[26], i2147[27], i2147[28] )
  i2146.endValueV2 = new pc.Vec2( i2147[29], i2147[30] )
  i2146.endValueColor = new pc.Color(i2147[31], i2147[32], i2147[33], i2147[34])
  i2146.endValueString = i2147[35]
  i2146.endValueRect = UnityEngine.Rect.MinMaxRect(i2147[36], i2147[37], i2147[38], i2147[39])
  request.r(i2147[40], i2147[41], 0, i2146, 'endValueTransform')
  i2146.optionalBool0 = !!i2147[42]
  i2146.optionalBool1 = !!i2147[43]
  i2146.optionalFloat0 = i2147[44]
  i2146.optionalInt0 = i2147[45]
  i2146.optionalRotationMode = i2147[46]
  i2146.optionalScrambleMode = i2147[47]
  i2146.optionalShakeRandomnessMode = i2147[48]
  i2146.optionalString = i2147[49]
  i2146.updateType = i2147[50]
  i2146.isSpeedBased = !!i2147[51]
  i2146.hasOnStart = !!i2147[52]
  i2146.hasOnPlay = !!i2147[53]
  i2146.hasOnUpdate = !!i2147[54]
  i2146.hasOnStepComplete = !!i2147[55]
  i2146.hasOnComplete = !!i2147[56]
  i2146.hasOnTweenCreated = !!i2147[57]
  i2146.hasOnRewind = !!i2147[58]
  i2146.onStart = request.d('UnityEngine.Events.UnityEvent', i2147[59], i2146.onStart)
  i2146.onPlay = request.d('UnityEngine.Events.UnityEvent', i2147[60], i2146.onPlay)
  i2146.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2147[61], i2146.onUpdate)
  i2146.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2147[62], i2146.onStepComplete)
  i2146.onComplete = request.d('UnityEngine.Events.UnityEvent', i2147[63], i2146.onComplete)
  i2146.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2147[64], i2146.onTweenCreated)
  i2146.onRewind = request.d('UnityEngine.Events.UnityEvent', i2147[65], i2146.onRewind)
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i2148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i2149 = data
  i2148.radius = i2149[0]
  i2148.enabled = !!i2149[1]
  i2148.isTrigger = !!i2149[2]
  i2148.usedByEffector = !!i2149[3]
  i2148.density = i2149[4]
  i2148.offset = new pc.Vec2( i2149[5], i2149[6] )
  request.r(i2149[7], i2149[8], 0, i2148, 'material')
  return i2148
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i2150 = root || request.c( 'PlayParticlesOnCollision' )
  var i2151 = data
  request.r(i2151[0], i2151[1], 0, i2150, 'Target')
  request.r(i2151[2], i2151[3], 0, i2150, 'ParticlePrefab')
  i2150.destroyIt = !!i2151[4]
  i2150.stayAtPlace = !!i2151[5]
  i2150.disableOnCollision = !!i2151[6]
  i2150.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i2151[7], i2150.OnCollisionEvent)
  return i2150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i2152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i2153 = data
  i2152.usedByComposite = !!i2153[0]
  i2152.autoTiling = !!i2153[1]
  var i2155 = i2153[2]
  var i2154 = []
  for(var i = 0; i < i2155.length; i += 1) {
  var i2157 = i2155[i + 0]
  var i2156 = []
  for(var i = 0; i < i2157.length; i += 2) {
    i2156.push( new pc.Vec2( i2157[i + 0], i2157[i + 1] ) );
  }
    i2154.push( i2156 );
  }
  i2152.points = i2154
  i2152.enabled = !!i2153[3]
  i2152.isTrigger = !!i2153[4]
  i2152.usedByEffector = !!i2153[5]
  i2152.density = i2153[6]
  i2152.offset = new pc.Vec2( i2153[7], i2153[8] )
  request.r(i2153[9], i2153[10], 0, i2152, 'material')
  return i2152
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i2164 = root || request.c( 'PlaySfxOnCollision' )
  var i2165 = data
  request.r(i2165[0], i2165[1], 0, i2164, 'Tip')
  i2164.Mode = i2165[2]
  request.r(i2165[3], i2165[4], 0, i2164, 'DragInput')
  request.r(i2165[5], i2165[6], 0, i2164, 'Source')
  i2164.startVol = i2165[7]
  i2164.targetVol = i2165[8]
  i2164.duration = i2165[9]
  request.r(i2165[10], i2165[11], 0, i2164, 'Particles')
  i2164.isDone = !!i2165[12]
  i2164.isInArea = !!i2165[13]
  i2164.isPlaying = !!i2165[14]
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2167 = data
  request.r(i2167[0], i2167[1], 0, i2166, 'clip')
  request.r(i2167[2], i2167[3], 0, i2166, 'outputAudioMixerGroup')
  i2166.playOnAwake = !!i2167[4]
  i2166.loop = !!i2167[5]
  i2166.time = i2167[6]
  i2166.volume = i2167[7]
  i2166.pitch = i2167[8]
  i2166.enabled = !!i2167[9]
  return i2166
}

Deserializers["SewingCol"] = function (request, data, root) {
  var i2168 = root || request.c( 'SewingCol' )
  var i2169 = data
  request.r(i2169[0], i2169[1], 0, i2168, 'targetTip')
  var i2171 = i2169[2]
  var i2170 = []
  for(var i = 0; i < i2171.length; i += 2) {
  request.r(i2171[i + 0], i2171[i + 1], 2, i2170, '')
  }
  i2168.Anim_Items = i2170
  i2168.isDone = !!i2169[3]
  request.r(i2169[4], i2169[5], 0, i2168, 'sfx')
  return i2168
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i2174 = root || request.c( 'BD_Progress' )
  var i2175 = data
  var i2177 = i2175[0]
  var i2176 = []
  for(var i = 0; i < i2177.length; i += 1) {
    i2176.push( request.d('ScratchData', i2177[i + 0]) );
  }
  i2174.AllScratches = i2176
  i2174.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i2175[1], i2174.OnScratchComplete)
  i2174.isProgDone = !!i2175[2]
  i2174.canCallComplete = !!i2175[3]
  i2174.CollectiveAppear = !!i2175[4]
  i2174.tipControl = !!i2175[5]
  i2174.progressControl = !!i2175[6]
  request.r(i2175[7], i2175[8], 0, i2174, 'thisDrag')
  i2174.CompleteEvent = request.d('System.Action', i2175[9], i2174.CompleteEvent)
  i2174.SubCompleteEvent = request.d('System.Action', i2175[10], i2174.SubCompleteEvent)
  return i2174
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i2180 = root || request.c( 'ScratchData' )
  var i2181 = data
  request.r(i2181[0], i2181[1], 0, i2180, 'ScratchManager')
  i2180.scratchLimit = i2181[2]
  i2180.isComplete = !!i2181[3]
  return i2180
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i2182 = root || request.c( 'BD_CameraFollow' )
  var i2183 = data
  request.r(i2183[0], i2183[1], 0, i2182, 'Tool')
  request.r(i2183[2], i2183[3], 0, i2182, 'Pivot')
  i2182.FOV = i2183[4]
  i2182.Y_L = i2183[5]
  i2182.Y_H = i2183[6]
  i2182.X_L = i2183[7]
  i2182.X_R = i2183[8]
  i2182.startDelay = i2183[9]
  i2182.duration = i2183[10]
  return i2182
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i2184 = root || request.c( 'BD_Action' )
  var i2185 = data
  i2184.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i2185[0], i2184.OnMouseDownEvent)
  i2184.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i2185[1], i2184.OnMouseUpEvent)
  i2184.setToolLayer = !!i2185[2]
  request.r(i2185[3], i2185[4], 0, i2184, 'tool_SP')
  return i2184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2187 = data
  request.r(i2187[0], i2187[1], 0, i2186, 'sharedMesh')
  return i2186
}

Deserializers["StaticFixedPipe"] = function (request, data, root) {
  var i2188 = root || request.c( 'StaticFixedPipe' )
  var i2189 = data
  request.r(i2189[0], i2189[1], 0, i2188, 'meshRenderer')
  request.r(i2189[2], i2189[3], 0, i2188, 'toolTransform')
  request.r(i2189[4], i2189[5], 0, i2188, 'toolDirectionPoint')
  request.r(i2189[6], i2189[7], 0, i2188, 'fixedEndPoint')
  i2188.segmentCount = i2189[8]
  i2188.totalLength = i2189[9]
  i2188.constraintIterations = i2189[10]
  i2188.gravity = new pc.Vec3( i2189[11], i2189[12], i2189[13] )
  i2188.pipeWidth = i2189[14]
  return i2188
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i2190 = root || request.c( 'BD_SpriteChange' )
  var i2191 = data
  request.r(i2191[0], i2191[1], 0, i2190, 'BD')
  request.r(i2191[2], i2191[3], 0, i2190, 'SR')
  request.r(i2191[4], i2191[5], 0, i2190, 'Default')
  request.r(i2191[6], i2191[7], 0, i2190, 'Picked')
  i2190.resetOnRelease = !!i2191[8]
  return i2190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2193 = data
  i2192.name = i2193[0]
  i2192.atlasId = i2193[1]
  i2192.mipmapCount = i2193[2]
  i2192.hdr = !!i2193[3]
  i2192.size = i2193[4]
  i2192.anisoLevel = i2193[5]
  i2192.filterMode = i2193[6]
  var i2195 = i2193[7]
  var i2194 = []
  for(var i = 0; i < i2195.length; i += 4) {
    i2194.push( UnityEngine.Rect.MinMaxRect(i2195[i + 0], i2195[i + 1], i2195[i + 2], i2195[i + 3]) );
  }
  i2192.rects = i2194
  i2192.wrapU = i2193[8]
  i2192.wrapV = i2193[9]
  return i2192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2199 = data
  i2198.name = i2199[0]
  i2198.index = i2199[1]
  i2198.startup = !!i2199[2]
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2201 = data
  i2200.aspect = i2201[0]
  i2200.orthographic = !!i2201[1]
  i2200.orthographicSize = i2201[2]
  i2200.backgroundColor = new pc.Color(i2201[3], i2201[4], i2201[5], i2201[6])
  i2200.nearClipPlane = i2201[7]
  i2200.farClipPlane = i2201[8]
  i2200.fieldOfView = i2201[9]
  i2200.depth = i2201[10]
  i2200.clearFlags = i2201[11]
  i2200.cullingMask = i2201[12]
  i2200.rect = i2201[13]
  request.r(i2201[14], i2201[15], 0, i2200, 'targetTexture')
  i2200.usePhysicalProperties = !!i2201[16]
  i2200.focalLength = i2201[17]
  i2200.sensorSize = new pc.Vec2( i2201[18], i2201[19] )
  i2200.lensShift = new pc.Vec2( i2201[20], i2201[21] )
  i2200.gateFit = i2201[22]
  i2200.commandBufferCount = i2201[23]
  i2200.cameraType = i2201[24]
  i2200.enabled = !!i2201[25]
  return i2200
}

Deserializers["CameraController"] = function (request, data, root) {
  var i2202 = root || request.c( 'CameraController' )
  var i2203 = data
  request.r(i2203[0], i2203[1], 0, i2202, 'cam')
  i2202.defaultPosition = new pc.Vec3( i2203[2], i2203[3], i2203[4] )
  i2202.defaultSize = i2203[5]
  i2202.defaultFOV = i2203[6]
  i2202.defaultDuration = i2203[7]
  i2202.defaultEase = i2203[8]
  return i2202
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i2204 = root || request.c( 'MusicSource' )
  var i2205 = data
  request.r(i2205[0], i2205[1], 0, i2204, 'source')
  return i2204
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i2206 = root || request.c( 'UI_Manager' )
  var i2207 = data
  i2206.levelCompleted = !!i2207[0]
  i2206.isPauseActive = !!i2207[1]
  i2206.loadIndex = i2207[2]
  request.r(i2207[3], i2207[4], 0, i2206, 'removeAdsButton')
  request.r(i2207[5], i2207[6], 0, i2206, 'pauseButton')
  request.r(i2207[7], i2207[8], 0, i2206, 'Fade_Img')
  request.r(i2207[9], i2207[10], 0, i2206, 'TopBarAnim')
  request.r(i2207[11], i2207[12], 0, i2206, 'MainPanel')
  request.r(i2207[13], i2207[14], 0, i2206, 'PausePanel')
  request.r(i2207[15], i2207[16], 0, i2206, 'PausePopUp')
  request.r(i2207[17], i2207[18], 0, i2206, 'PauseCanvasGroup')
  request.r(i2207[19], i2207[20], 0, i2206, 'RateUsPanel')
  request.r(i2207[21], i2207[22], 0, i2206, 'RateUsPopUp')
  request.r(i2207[23], i2207[24], 0, i2206, 'RemoveAdsPanel')
  request.r(i2207[25], i2207[26], 0, i2206, 'RemoveAdsPopUp')
  request.r(i2207[27], i2207[28], 0, i2206, 'RemoveAdsCanvasGroup')
  var i2209 = i2207[29]
  var i2208 = []
  for(var i = 0; i < i2209.length; i += 2) {
  request.r(i2209[i + 0], i2209[i + 1], 2, i2208, '')
  }
  i2206.RemoveAdsAnims = i2208
  request.r(i2207[30], i2207[31], 0, i2206, 'CompletePanel')
  request.r(i2207[32], i2207[33], 0, i2206, 'LevelIcon')
  request.r(i2207[34], i2207[35], 0, i2206, 'CompleteParticles')
  request.r(i2207[36], i2207[37], 0, i2206, 'progressBar')
  request.r(i2207[38], i2207[39], 0, i2206, 'progressText')
  request.r(i2207[40], i2207[41], 0, i2206, 'toolIcon1')
  request.r(i2207[42], i2207[43], 0, i2206, 'toolIcon2')
  request.r(i2207[44], i2207[45], 0, i2206, 'toolIcon3')
  request.r(i2207[46], i2207[47], 0, i2206, 'toolIcon4')
  request.r(i2207[48], i2207[49], 0, i2206, 'target1')
  request.r(i2207[50], i2207[51], 0, i2206, 'target2')
  i2206.toolMoveDuration = i2207[52]
  i2206.currentIndex = i2207[53]
  var i2211 = i2207[54]
  var i2210 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2211.length; i += 2) {
  request.r(i2211[i + 0], i2211[i + 1], 1, i2210, '')
  }
  i2206.allTools = i2210
  request.r(i2207[55], i2207[56], 0, i2206, 'clockProgress')
  request.r(i2207[57], i2207[58], 0, i2206, 'clockProgressFill')
  request.r(i2207[59], i2207[60], 0, i2206, 'clockAudio')
  i2206.moveDistance = i2207[61]
  i2206.animationDuration = i2207[62]
  i2206.greyBgChildName = i2207[63]
  i2206.pushOffset = i2207[64]
  return i2206
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i2212 = root || request.c( 'GameManagerPlayable' )
  var i2213 = data
  request.r(i2213[0], i2213[1], 0, i2212, 'endParticles')
  request.r(i2213[2], i2213[3], 0, i2212, 'stepCompleteParticles')
  request.r(i2213[4], i2213[5], 0, i2212, 'DefaultMat')
  request.r(i2213[6], i2213[7], 0, i2212, 'BG_Music')
  request.r(i2213[8], i2213[9], 0, i2212, 'restoreEffectShader')
  request.r(i2213[10], i2213[11], 0, i2212, 'stickerEffectShader')
  i2212.isComplete = !!i2213[12]
  i2212.isPaused = !!i2213[13]
  request.r(i2213[14], i2213[15], 0, i2212, 'currentLevel')
  i2212.startLevelOnPlay = !!i2213[16]
  i2212.currentLevelNo = i2213[17]
  return i2212
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2214 = root || request.c( 'AudioController' )
  var i2215 = data
  request.r(i2215[0], i2215[1], 0, i2214, 'MainMixer')
  request.r(i2215[2], i2215[3], 0, i2214, 'UiClick')
  request.r(i2215[4], i2215[5], 0, i2214, 'UiClickSource')
  var i2217 = i2215[6]
  var i2216 = []
  for(var i = 0; i < i2217.length; i += 2) {
  request.r(i2217[i + 0], i2217[i + 1], 2, i2216, '')
  }
  i2214.SfxSources = i2216
  var i2219 = i2215[7]
  var i2218 = []
  for(var i = 0; i < i2219.length; i += 2) {
  request.r(i2219[i + 0], i2219[i + 1], 2, i2218, '')
  }
  i2214.AllClips = i2218
  return i2214
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2222 = root || request.c( 'UnityEngine.UI.Image' )
  var i2223 = data
  request.r(i2223[0], i2223[1], 0, i2222, 'm_Sprite')
  i2222.m_Type = i2223[2]
  i2222.m_PreserveAspect = !!i2223[3]
  i2222.m_FillCenter = !!i2223[4]
  i2222.m_FillMethod = i2223[5]
  i2222.m_FillAmount = i2223[6]
  i2222.m_FillClockwise = !!i2223[7]
  i2222.m_FillOrigin = i2223[8]
  i2222.m_UseSpriteMesh = !!i2223[9]
  i2222.m_PixelsPerUnitMultiplier = i2223[10]
  request.r(i2223[11], i2223[12], 0, i2222, 'm_Material')
  i2222.m_Maskable = !!i2223[13]
  i2222.m_Color = new pc.Color(i2223[14], i2223[15], i2223[16], i2223[17])
  i2222.m_RaycastTarget = !!i2223[18]
  i2222.m_RaycastPadding = new pc.Vec4( i2223[19], i2223[20], i2223[21], i2223[22] )
  return i2222
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2224 = root || request.c( 'UnityEngine.UI.Button' )
  var i2225 = data
  i2224.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2225[0], i2224.m_OnClick)
  i2224.m_Navigation = request.d('UnityEngine.UI.Navigation', i2225[1], i2224.m_Navigation)
  i2224.m_Transition = i2225[2]
  i2224.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2225[3], i2224.m_Colors)
  i2224.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2225[4], i2224.m_SpriteState)
  i2224.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2225[5], i2224.m_AnimationTriggers)
  i2224.m_Interactable = !!i2225[6]
  request.r(i2225[7], i2225[8], 0, i2224, 'm_TargetGraphic')
  return i2224
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2226 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2227 = data
  i2226.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2227[0], i2226.m_PersistentCalls)
  return i2226
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2228 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2229 = data
  i2228.m_Mode = i2229[0]
  i2228.m_WrapAround = !!i2229[1]
  request.r(i2229[2], i2229[3], 0, i2228, 'm_SelectOnUp')
  request.r(i2229[4], i2229[5], 0, i2228, 'm_SelectOnDown')
  request.r(i2229[6], i2229[7], 0, i2228, 'm_SelectOnLeft')
  request.r(i2229[8], i2229[9], 0, i2228, 'm_SelectOnRight')
  return i2228
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2230 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2231 = data
  i2230.m_NormalColor = new pc.Color(i2231[0], i2231[1], i2231[2], i2231[3])
  i2230.m_HighlightedColor = new pc.Color(i2231[4], i2231[5], i2231[6], i2231[7])
  i2230.m_PressedColor = new pc.Color(i2231[8], i2231[9], i2231[10], i2231[11])
  i2230.m_SelectedColor = new pc.Color(i2231[12], i2231[13], i2231[14], i2231[15])
  i2230.m_DisabledColor = new pc.Color(i2231[16], i2231[17], i2231[18], i2231[19])
  i2230.m_ColorMultiplier = i2231[20]
  i2230.m_FadeDuration = i2231[21]
  return i2230
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2232 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2233 = data
  request.r(i2233[0], i2233[1], 0, i2232, 'm_HighlightedSprite')
  request.r(i2233[2], i2233[3], 0, i2232, 'm_PressedSprite')
  request.r(i2233[4], i2233[5], 0, i2232, 'm_SelectedSprite')
  request.r(i2233[6], i2233[7], 0, i2232, 'm_DisabledSprite')
  return i2232
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2234 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2235 = data
  i2234.m_NormalTrigger = i2235[0]
  i2234.m_HighlightedTrigger = i2235[1]
  i2234.m_PressedTrigger = i2235[2]
  i2234.m_SelectedTrigger = i2235[3]
  i2234.m_DisabledTrigger = i2235[4]
  return i2234
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i2236 = root || request.c( 'PlayableHudRuntime' )
  var i2237 = data
  return i2236
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2238 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2239 = data
  request.r(i2239[0], i2239[1], 0, i2238, 'm_FirstSelected')
  i2238.m_sendNavigationEvents = !!i2239[2]
  i2238.m_DragThreshold = i2239[3]
  return i2238
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2240 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2241 = data
  i2240.m_HorizontalAxis = i2241[0]
  i2240.m_VerticalAxis = i2241[1]
  i2240.m_SubmitButton = i2241[2]
  i2240.m_CancelButton = i2241[3]
  i2240.m_InputActionsPerSecond = i2241[4]
  i2240.m_RepeatDelay = i2241[5]
  i2240.m_ForceModuleActive = !!i2241[6]
  i2240.m_SendPointerHoverToParent = !!i2241[7]
  return i2240
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i2242 = root || request.c( 'PlayableRouter' )
  var i2243 = data
  var i2245 = i2243[0]
  var i2244 = []
  for(var i = 0; i < i2245.length; i += 2) {
  request.r(i2245[i + 0], i2245[i + 1], 2, i2244, '')
  }
  i2242.menuObjects = i2244
  var i2247 = i2243[1]
  var i2246 = []
  for(var i = 0; i < i2247.length; i += 2) {
  request.r(i2247[i + 0], i2247[i + 1], 2, i2246, '')
  }
  i2242.gameplayObjects = i2246
  var i2249 = i2243[2]
  var i2248 = []
  for(var i = 0; i < i2249.length; i += 1) {
    i2248.push( request.d('PlayableRouter+SubLevelSlot', i2249[i + 0]) );
  }
  i2242.subLevels = i2248
  i2242.fadeDuration = i2243[3]
  i2242.onMenuClosing = request.d('UnityEngine.Events.UnityEvent', i2243[4], i2242.onMenuClosing)
  i2242.lockedMessage = i2243[5]
  i2242.lockedTapsToCTA = i2243[6]
  return i2242
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i2252 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i2253 = data
  request.r(i2253[0], i2253[1], 0, i2252, 'button')
  request.r(i2253[2], i2253[3], 0, i2252, 'level')
  return i2252
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i2254 = root || request.c( 'ToastManager' )
  var i2255 = data
  request.r(i2255[0], i2255[1], 0, i2254, 'toastPanel')
  request.r(i2255[2], i2255[3], 0, i2254, 'toastPopup')
  request.r(i2255[4], i2255[5], 0, i2254, 'canvasGroup')
  request.r(i2255[6], i2255[7], 0, i2254, 'toastText')
  i2254.startY = i2255[8]
  i2254.visibleY = i2255[9]
  i2254.endY = i2255[10]
  i2254.animationTime = i2255[11]
  i2254.animationTimeUp = i2255[12]
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2257 = data
  i2256.m_Alpha = i2257[0]
  i2256.m_Interactable = !!i2257[1]
  i2256.m_BlocksRaycasts = !!i2257[2]
  i2256.m_IgnoreParentGroups = !!i2257[3]
  i2256.enabled = !!i2257[4]
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2259 = data
  i2258.ambientIntensity = i2259[0]
  i2258.reflectionIntensity = i2259[1]
  i2258.ambientMode = i2259[2]
  i2258.ambientLight = new pc.Color(i2259[3], i2259[4], i2259[5], i2259[6])
  i2258.ambientSkyColor = new pc.Color(i2259[7], i2259[8], i2259[9], i2259[10])
  i2258.ambientGroundColor = new pc.Color(i2259[11], i2259[12], i2259[13], i2259[14])
  i2258.ambientEquatorColor = new pc.Color(i2259[15], i2259[16], i2259[17], i2259[18])
  i2258.fogColor = new pc.Color(i2259[19], i2259[20], i2259[21], i2259[22])
  i2258.fogEndDistance = i2259[23]
  i2258.fogStartDistance = i2259[24]
  i2258.fogDensity = i2259[25]
  i2258.fog = !!i2259[26]
  request.r(i2259[27], i2259[28], 0, i2258, 'skybox')
  i2258.fogMode = i2259[29]
  var i2261 = i2259[30]
  var i2260 = []
  for(var i = 0; i < i2261.length; i += 1) {
    i2260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2261[i + 0]) );
  }
  i2258.lightmaps = i2260
  i2258.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2259[31], i2258.lightProbes)
  i2258.lightmapsMode = i2259[32]
  i2258.mixedBakeMode = i2259[33]
  i2258.environmentLightingMode = i2259[34]
  i2258.ambientProbe = new pc.SphericalHarmonicsL2(i2259[35])
  request.r(i2259[36], i2259[37], 0, i2258, 'customReflection')
  request.r(i2259[38], i2259[39], 0, i2258, 'defaultReflection')
  i2258.defaultReflectionMode = i2259[40]
  i2258.defaultReflectionResolution = i2259[41]
  i2258.sunLightObjectId = i2259[42]
  i2258.pixelLightCount = i2259[43]
  i2258.defaultReflectionHDR = !!i2259[44]
  i2258.hasLightDataAsset = !!i2259[45]
  i2258.hasManualGenerate = !!i2259[46]
  return i2258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2265 = data
  request.r(i2265[0], i2265[1], 0, i2264, 'lightmapColor')
  request.r(i2265[2], i2265[3], 0, i2264, 'lightmapDirection')
  request.r(i2265[4], i2265[5], 0, i2264, 'shadowMask')
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2266 = root || new UnityEngine.LightProbes()
  var i2267 = data
  return i2266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2275 = data
  var i2277 = i2275[0]
  var i2276 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2277.length; i += 1) {
    i2276.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2277[i + 0]));
  }
  i2274.ShaderCompilationErrors = i2276
  i2274.name = i2275[1]
  i2274.guid = i2275[2]
  var i2279 = i2275[3]
  var i2278 = []
  for(var i = 0; i < i2279.length; i += 1) {
    i2278.push( i2279[i + 0] );
  }
  i2274.shaderDefinedKeywords = i2278
  var i2281 = i2275[4]
  var i2280 = []
  for(var i = 0; i < i2281.length; i += 1) {
    i2280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2281[i + 0]) );
  }
  i2274.passes = i2280
  var i2283 = i2275[5]
  var i2282 = []
  for(var i = 0; i < i2283.length; i += 1) {
    i2282.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2283[i + 0]) );
  }
  i2274.usePasses = i2282
  var i2285 = i2275[6]
  var i2284 = []
  for(var i = 0; i < i2285.length; i += 1) {
    i2284.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2285[i + 0]) );
  }
  i2274.defaultParameterValues = i2284
  request.r(i2275[7], i2275[8], 0, i2274, 'unityFallbackShader')
  i2274.readDepth = !!i2275[9]
  i2274.hasDepthOnlyPass = !!i2275[10]
  i2274.isCreatedByShaderGraph = !!i2275[11]
  i2274.disableBatching = !!i2275[12]
  i2274.compiled = !!i2275[13]
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2289 = data
  i2288.shaderName = i2289[0]
  i2288.errorMessage = i2289[1]
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2294 = root || new pc.UnityShaderPass()
  var i2295 = data
  i2294.id = i2295[0]
  i2294.subShaderIndex = i2295[1]
  i2294.name = i2295[2]
  i2294.passType = i2295[3]
  i2294.grabPassTextureName = i2295[4]
  i2294.usePass = !!i2295[5]
  i2294.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2295[6], i2294.zTest)
  i2294.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2295[7], i2294.zWrite)
  i2294.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2295[8], i2294.culling)
  i2294.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2295[9], i2294.blending)
  i2294.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2295[10], i2294.alphaBlending)
  i2294.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2295[11], i2294.colorWriteMask)
  i2294.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2295[12], i2294.offsetUnits)
  i2294.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2295[13], i2294.offsetFactor)
  i2294.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2295[14], i2294.stencilRef)
  i2294.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2295[15], i2294.stencilReadMask)
  i2294.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2295[16], i2294.stencilWriteMask)
  i2294.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2295[17], i2294.stencilOp)
  i2294.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2295[18], i2294.stencilOpFront)
  i2294.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2295[19], i2294.stencilOpBack)
  var i2297 = i2295[20]
  var i2296 = []
  for(var i = 0; i < i2297.length; i += 1) {
    i2296.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2297[i + 0]) );
  }
  i2294.tags = i2296
  var i2299 = i2295[21]
  var i2298 = []
  for(var i = 0; i < i2299.length; i += 1) {
    i2298.push( i2299[i + 0] );
  }
  i2294.passDefinedKeywords = i2298
  var i2301 = i2295[22]
  var i2300 = []
  for(var i = 0; i < i2301.length; i += 1) {
    i2300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2301[i + 0]) );
  }
  i2294.passDefinedKeywordGroups = i2300
  var i2303 = i2295[23]
  var i2302 = []
  for(var i = 0; i < i2303.length; i += 1) {
    i2302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2303[i + 0]) );
  }
  i2294.variants = i2302
  var i2305 = i2295[24]
  var i2304 = []
  for(var i = 0; i < i2305.length; i += 1) {
    i2304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2305[i + 0]) );
  }
  i2294.excludedVariants = i2304
  i2294.hasDepthReader = !!i2295[25]
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2307 = data
  i2306.val = i2307[0]
  i2306.name = i2307[1]
  return i2306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2309 = data
  i2308.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2309[0], i2308.src)
  i2308.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2309[1], i2308.dst)
  i2308.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2309[2], i2308.op)
  return i2308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2311 = data
  i2310.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2311[0], i2310.pass)
  i2310.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2311[1], i2310.fail)
  i2310.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2311[2], i2310.zFail)
  i2310.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2311[3], i2310.comp)
  return i2310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2315 = data
  i2314.name = i2315[0]
  i2314.value = i2315[1]
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2319 = data
  var i2321 = i2319[0]
  var i2320 = []
  for(var i = 0; i < i2321.length; i += 1) {
    i2320.push( i2321[i + 0] );
  }
  i2318.keywords = i2320
  i2318.hasDiscard = !!i2319[1]
  return i2318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2325 = data
  i2324.passId = i2325[0]
  i2324.subShaderIndex = i2325[1]
  var i2327 = i2325[2]
  var i2326 = []
  for(var i = 0; i < i2327.length; i += 1) {
    i2326.push( i2327[i + 0] );
  }
  i2324.keywords = i2326
  i2324.vertexProgram = i2325[3]
  i2324.fragmentProgram = i2325[4]
  i2324.exportedForWebGl2 = !!i2325[5]
  i2324.readDepth = !!i2325[6]
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2331 = data
  request.r(i2331[0], i2331[1], 0, i2330, 'shader')
  i2330.pass = i2331[2]
  return i2330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2335 = data
  i2334.name = i2335[0]
  i2334.type = i2335[1]
  i2334.value = new pc.Vec4( i2335[2], i2335[3], i2335[4], i2335[5] )
  i2334.textureValue = i2335[6]
  i2334.shaderPropertyFlag = i2335[7]
  return i2334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2337 = data
  i2336.name = i2337[0]
  request.r(i2337[1], i2337[2], 0, i2336, 'texture')
  i2336.aabb = i2337[3]
  i2336.vertices = i2337[4]
  i2336.triangles = i2337[5]
  i2336.textureRect = UnityEngine.Rect.MinMaxRect(i2337[6], i2337[7], i2337[8], i2337[9])
  i2336.packedRect = UnityEngine.Rect.MinMaxRect(i2337[10], i2337[11], i2337[12], i2337[13])
  i2336.border = new pc.Vec4( i2337[14], i2337[15], i2337[16], i2337[17] )
  i2336.transparency = i2337[18]
  i2336.bounds = i2337[19]
  i2336.pixelsPerUnit = i2337[20]
  i2336.textureWidth = i2337[21]
  i2336.textureHeight = i2337[22]
  i2336.nativeSize = new pc.Vec2( i2337[23], i2337[24] )
  i2336.pivot = new pc.Vec2( i2337[25], i2337[26] )
  i2336.textureRectOffset = new pc.Vec2( i2337[27], i2337[28] )
  return i2336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2339 = data
  i2338.name = i2339[0]
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2341 = data
  i2340.name = i2341[0]
  i2340.wrapMode = i2341[1]
  i2340.isLooping = !!i2341[2]
  i2340.length = i2341[3]
  var i2343 = i2341[4]
  var i2342 = []
  for(var i = 0; i < i2343.length; i += 1) {
    i2342.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2343[i + 0]) );
  }
  i2340.curves = i2342
  var i2345 = i2341[5]
  var i2344 = []
  for(var i = 0; i < i2345.length; i += 1) {
    i2344.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2345[i + 0]) );
  }
  i2340.events = i2344
  i2340.halfPrecision = !!i2341[6]
  i2340._frameRate = i2341[7]
  i2340.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2341[8], i2340.localBounds)
  i2340.hasMuscleCurves = !!i2341[9]
  var i2347 = i2341[10]
  var i2346 = []
  for(var i = 0; i < i2347.length; i += 1) {
    i2346.push( i2347[i + 0] );
  }
  i2340.clipMuscleConstant = i2346
  i2340.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2341[11], i2340.clipBindingConstant)
  return i2340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2351 = data
  i2350.path = i2351[0]
  i2350.hash = i2351[1]
  i2350.componentType = i2351[2]
  i2350.property = i2351[3]
  i2350.keys = i2351[4]
  var i2353 = i2351[5]
  var i2352 = []
  for(var i = 0; i < i2353.length; i += 1) {
    i2352.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2353[i + 0]) );
  }
  i2350.objectReferenceKeys = i2352
  return i2350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2357 = data
  i2356.time = i2357[0]
  request.r(i2357[1], i2357[2], 0, i2356, 'value')
  return i2356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2361 = data
  i2360.functionName = i2361[0]
  i2360.floatParameter = i2361[1]
  i2360.intParameter = i2361[2]
  i2360.stringParameter = i2361[3]
  request.r(i2361[4], i2361[5], 0, i2360, 'objectReferenceParameter')
  i2360.time = i2361[6]
  return i2360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2363 = data
  i2362.center = new pc.Vec3( i2363[0], i2363[1], i2363[2] )
  i2362.extends = new pc.Vec3( i2363[3], i2363[4], i2363[5] )
  return i2362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2367 = data
  var i2369 = i2367[0]
  var i2368 = []
  for(var i = 0; i < i2369.length; i += 1) {
    i2368.push( i2369[i + 0] );
  }
  i2366.genericBindings = i2368
  var i2371 = i2367[1]
  var i2370 = []
  for(var i = 0; i < i2371.length; i += 1) {
    i2370.push( i2371[i + 0] );
  }
  i2366.pptrCurveMapping = i2370
  return i2366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2373 = data
  i2372.name = i2373[0]
  i2372.ascent = i2373[1]
  i2372.originalLineHeight = i2373[2]
  i2372.fontSize = i2373[3]
  var i2375 = i2373[4]
  var i2374 = []
  for(var i = 0; i < i2375.length; i += 1) {
    i2374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2375[i + 0]) );
  }
  i2372.characterInfo = i2374
  request.r(i2373[5], i2373[6], 0, i2372, 'texture')
  i2372.originalFontSize = i2373[7]
  return i2372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2379 = data
  i2378.index = i2379[0]
  i2378.advance = i2379[1]
  i2378.bearing = i2379[2]
  i2378.glyphWidth = i2379[3]
  i2378.glyphHeight = i2379[4]
  i2378.minX = i2379[5]
  i2378.maxX = i2379[6]
  i2378.minY = i2379[7]
  i2378.maxY = i2379[8]
  i2378.uvBottomLeftX = i2379[9]
  i2378.uvBottomLeftY = i2379[10]
  i2378.uvBottomRightX = i2379[11]
  i2378.uvBottomRightY = i2379[12]
  i2378.uvTopLeftX = i2379[13]
  i2378.uvTopLeftY = i2379[14]
  i2378.uvTopRightX = i2379[15]
  i2378.uvTopRightY = i2379[16]
  return i2378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2381 = data
  i2380.name = i2381[0]
  var i2383 = i2381[1]
  var i2382 = []
  for(var i = 0; i < i2383.length; i += 1) {
    i2382.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2383[i + 0]) );
  }
  i2380.layers = i2382
  var i2385 = i2381[2]
  var i2384 = []
  for(var i = 0; i < i2385.length; i += 1) {
    i2384.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2385[i + 0]) );
  }
  i2380.parameters = i2384
  i2380.animationClips = i2381[3]
  i2380.avatarUnsupported = i2381[4]
  return i2380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2389 = data
  i2388.name = i2389[0]
  i2388.defaultWeight = i2389[1]
  i2388.blendingMode = i2389[2]
  i2388.avatarMask = i2389[3]
  i2388.syncedLayerIndex = i2389[4]
  i2388.syncedLayerAffectsTiming = !!i2389[5]
  i2388.syncedLayers = i2389[6]
  i2388.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2389[7], i2388.stateMachine)
  return i2388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2391 = data
  i2390.id = i2391[0]
  i2390.name = i2391[1]
  i2390.path = i2391[2]
  var i2393 = i2391[3]
  var i2392 = []
  for(var i = 0; i < i2393.length; i += 1) {
    i2392.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2393[i + 0]) );
  }
  i2390.states = i2392
  var i2395 = i2391[4]
  var i2394 = []
  for(var i = 0; i < i2395.length; i += 1) {
    i2394.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2395[i + 0]) );
  }
  i2390.machines = i2394
  var i2397 = i2391[5]
  var i2396 = []
  for(var i = 0; i < i2397.length; i += 1) {
    i2396.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2397[i + 0]) );
  }
  i2390.entryStateTransitions = i2396
  var i2399 = i2391[6]
  var i2398 = []
  for(var i = 0; i < i2399.length; i += 1) {
    i2398.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2399[i + 0]) );
  }
  i2390.exitStateTransitions = i2398
  var i2401 = i2391[7]
  var i2400 = []
  for(var i = 0; i < i2401.length; i += 1) {
    i2400.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2401[i + 0]) );
  }
  i2390.anyStateTransitions = i2400
  i2390.defaultStateId = i2391[8]
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2405 = data
  i2404.id = i2405[0]
  i2404.name = i2405[1]
  i2404.cycleOffset = i2405[2]
  i2404.cycleOffsetParameter = i2405[3]
  i2404.cycleOffsetParameterActive = !!i2405[4]
  i2404.mirror = !!i2405[5]
  i2404.mirrorParameter = i2405[6]
  i2404.mirrorParameterActive = !!i2405[7]
  i2404.motionId = i2405[8]
  i2404.nameHash = i2405[9]
  i2404.fullPathHash = i2405[10]
  i2404.speed = i2405[11]
  i2404.speedParameter = i2405[12]
  i2404.speedParameterActive = !!i2405[13]
  i2404.tag = i2405[14]
  i2404.tagHash = i2405[15]
  i2404.writeDefaultValues = !!i2405[16]
  var i2407 = i2405[17]
  var i2406 = []
  for(var i = 0; i < i2407.length; i += 2) {
  request.r(i2407[i + 0], i2407[i + 1], 2, i2406, '')
  }
  i2404.behaviours = i2406
  var i2409 = i2405[18]
  var i2408 = []
  for(var i = 0; i < i2409.length; i += 1) {
    i2408.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2409[i + 0]) );
  }
  i2404.transitions = i2408
  return i2404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2415 = data
  i2414.fullPath = i2415[0]
  i2414.canTransitionToSelf = !!i2415[1]
  i2414.duration = i2415[2]
  i2414.exitTime = i2415[3]
  i2414.hasExitTime = !!i2415[4]
  i2414.hasFixedDuration = !!i2415[5]
  i2414.interruptionSource = i2415[6]
  i2414.offset = i2415[7]
  i2414.orderedInterruption = !!i2415[8]
  i2414.destinationStateId = i2415[9]
  i2414.isExit = !!i2415[10]
  i2414.mute = !!i2415[11]
  i2414.solo = !!i2415[12]
  var i2417 = i2415[13]
  var i2416 = []
  for(var i = 0; i < i2417.length; i += 1) {
    i2416.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2417[i + 0]) );
  }
  i2414.conditions = i2416
  return i2414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2423 = data
  i2422.destinationStateId = i2423[0]
  i2422.isExit = !!i2423[1]
  i2422.mute = !!i2423[2]
  i2422.solo = !!i2423[3]
  var i2425 = i2423[4]
  var i2424 = []
  for(var i = 0; i < i2425.length; i += 1) {
    i2424.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2425[i + 0]) );
  }
  i2422.conditions = i2424
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2429 = data
  i2428.mode = i2429[0]
  i2428.parameter = i2429[1]
  i2428.threshold = i2429[2]
  return i2428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2433 = data
  i2432.defaultBool = !!i2433[0]
  i2432.defaultFloat = i2433[1]
  i2432.defaultInt = i2433[2]
  i2432.name = i2433[3]
  i2432.nameHash = i2433[4]
  i2432.type = i2433[5]
  return i2432
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2434 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2435 = data
  i2434.useSafeMode = !!i2435[0]
  i2434.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2435[1], i2434.safeModeOptions)
  i2434.timeScale = i2435[2]
  i2434.unscaledTimeScale = i2435[3]
  i2434.useSmoothDeltaTime = !!i2435[4]
  i2434.maxSmoothUnscaledTime = i2435[5]
  i2434.rewindCallbackMode = i2435[6]
  i2434.showUnityEditorReport = !!i2435[7]
  i2434.logBehaviour = i2435[8]
  i2434.drawGizmos = !!i2435[9]
  i2434.defaultRecyclable = !!i2435[10]
  i2434.defaultAutoPlay = i2435[11]
  i2434.defaultUpdateType = i2435[12]
  i2434.defaultTimeScaleIndependent = !!i2435[13]
  i2434.defaultEaseType = i2435[14]
  i2434.defaultEaseOvershootOrAmplitude = i2435[15]
  i2434.defaultEasePeriod = i2435[16]
  i2434.defaultAutoKill = !!i2435[17]
  i2434.defaultLoopType = i2435[18]
  i2434.debugMode = !!i2435[19]
  i2434.debugStoreTargetId = !!i2435[20]
  i2434.showPreviewPanel = !!i2435[21]
  i2434.storeSettingsLocation = i2435[22]
  i2434.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2435[23], i2434.modules)
  i2434.createASMDEF = !!i2435[24]
  i2434.showPlayingTweens = !!i2435[25]
  i2434.showPausedTweens = !!i2435[26]
  return i2434
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2436 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2437 = data
  i2436.logBehaviour = i2437[0]
  i2436.nestedTweenFailureBehaviour = i2437[1]
  return i2436
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2438 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2439 = data
  i2438.showPanel = !!i2439[0]
  i2438.audioEnabled = !!i2439[1]
  i2438.physicsEnabled = !!i2439[2]
  i2438.physics2DEnabled = !!i2439[3]
  i2438.spriteEnabled = !!i2439[4]
  i2438.uiEnabled = !!i2439[5]
  i2438.textMeshProEnabled = !!i2439[6]
  i2438.tk2DEnabled = !!i2439[7]
  i2438.deAudioEnabled = !!i2439[8]
  i2438.deUnityExtendedEnabled = !!i2439[9]
  i2438.epoOutlineEnabled = !!i2439[10]
  return i2438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2441 = data
  var i2443 = i2441[0]
  var i2442 = []
  for(var i = 0; i < i2443.length; i += 1) {
    i2442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2443[i + 0]) );
  }
  i2440.files = i2442
  i2440.componentToPrefabIds = i2441[1]
  return i2440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2447 = data
  i2446.path = i2447[0]
  request.r(i2447[1], i2447[2], 0, i2446, 'unityObject')
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2449 = data
  var i2451 = i2449[0]
  var i2450 = []
  for(var i = 0; i < i2451.length; i += 1) {
    i2450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2451[i + 0]) );
  }
  i2448.scriptsExecutionOrder = i2450
  var i2453 = i2449[1]
  var i2452 = []
  for(var i = 0; i < i2453.length; i += 1) {
    i2452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2453[i + 0]) );
  }
  i2448.sortingLayers = i2452
  var i2455 = i2449[2]
  var i2454 = []
  for(var i = 0; i < i2455.length; i += 1) {
    i2454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2455[i + 0]) );
  }
  i2448.cullingLayers = i2454
  i2448.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2449[3], i2448.timeSettings)
  i2448.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2449[4], i2448.physicsSettings)
  i2448.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2449[5], i2448.physics2DSettings)
  i2448.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2449[6], i2448.qualitySettings)
  i2448.enableRealtimeShadows = !!i2449[7]
  i2448.enableAutoInstancing = !!i2449[8]
  i2448.enableStaticBatching = !!i2449[9]
  i2448.enableDynamicBatching = !!i2449[10]
  i2448.usePreservativeDynamicBatching = !!i2449[11]
  i2448.lightmapEncodingQuality = i2449[12]
  i2448.desiredColorSpace = i2449[13]
  var i2457 = i2449[14]
  var i2456 = []
  for(var i = 0; i < i2457.length; i += 1) {
    i2456.push( i2457[i + 0] );
  }
  i2448.allTags = i2456
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2461 = data
  i2460.name = i2461[0]
  i2460.value = i2461[1]
  return i2460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2465 = data
  i2464.id = i2465[0]
  i2464.name = i2465[1]
  i2464.value = i2465[2]
  return i2464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2469 = data
  i2468.id = i2469[0]
  i2468.name = i2469[1]
  return i2468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2471 = data
  i2470.fixedDeltaTime = i2471[0]
  i2470.maximumDeltaTime = i2471[1]
  i2470.timeScale = i2471[2]
  i2470.maximumParticleTimestep = i2471[3]
  return i2470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2473 = data
  i2472.gravity = new pc.Vec3( i2473[0], i2473[1], i2473[2] )
  i2472.defaultSolverIterations = i2473[3]
  i2472.bounceThreshold = i2473[4]
  i2472.autoSyncTransforms = !!i2473[5]
  i2472.autoSimulation = !!i2473[6]
  var i2475 = i2473[7]
  var i2474 = []
  for(var i = 0; i < i2475.length; i += 1) {
    i2474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2475[i + 0]) );
  }
  i2472.collisionMatrix = i2474
  return i2472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2479 = data
  i2478.enabled = !!i2479[0]
  i2478.layerId = i2479[1]
  i2478.otherLayerId = i2479[2]
  return i2478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2481 = data
  request.r(i2481[0], i2481[1], 0, i2480, 'material')
  i2480.gravity = new pc.Vec2( i2481[2], i2481[3] )
  i2480.positionIterations = i2481[4]
  i2480.velocityIterations = i2481[5]
  i2480.velocityThreshold = i2481[6]
  i2480.maxLinearCorrection = i2481[7]
  i2480.maxAngularCorrection = i2481[8]
  i2480.maxTranslationSpeed = i2481[9]
  i2480.maxRotationSpeed = i2481[10]
  i2480.baumgarteScale = i2481[11]
  i2480.baumgarteTOIScale = i2481[12]
  i2480.timeToSleep = i2481[13]
  i2480.linearSleepTolerance = i2481[14]
  i2480.angularSleepTolerance = i2481[15]
  i2480.defaultContactOffset = i2481[16]
  i2480.autoSimulation = !!i2481[17]
  i2480.queriesHitTriggers = !!i2481[18]
  i2480.queriesStartInColliders = !!i2481[19]
  i2480.callbacksOnDisable = !!i2481[20]
  i2480.reuseCollisionCallbacks = !!i2481[21]
  i2480.autoSyncTransforms = !!i2481[22]
  var i2483 = i2481[23]
  var i2482 = []
  for(var i = 0; i < i2483.length; i += 1) {
    i2482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2483[i + 0]) );
  }
  i2480.collisionMatrix = i2482
  return i2480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2487 = data
  i2486.enabled = !!i2487[0]
  i2486.layerId = i2487[1]
  i2486.otherLayerId = i2487[2]
  return i2486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2489 = data
  var i2491 = i2489[0]
  var i2490 = []
  for(var i = 0; i < i2491.length; i += 1) {
    i2490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2491[i + 0]) );
  }
  i2488.qualityLevels = i2490
  var i2493 = i2489[1]
  var i2492 = []
  for(var i = 0; i < i2493.length; i += 1) {
    i2492.push( i2493[i + 0] );
  }
  i2488.names = i2492
  i2488.shadows = i2489[2]
  i2488.anisotropicFiltering = i2489[3]
  i2488.antiAliasing = i2489[4]
  i2488.lodBias = i2489[5]
  i2488.shadowCascades = i2489[6]
  i2488.shadowDistance = i2489[7]
  i2488.shadowmaskMode = i2489[8]
  i2488.shadowProjection = i2489[9]
  i2488.shadowResolution = i2489[10]
  i2488.softParticles = !!i2489[11]
  i2488.softVegetation = !!i2489[12]
  i2488.activeColorSpace = i2489[13]
  i2488.desiredColorSpace = i2489[14]
  i2488.masterTextureLimit = i2489[15]
  i2488.maxQueuedFrames = i2489[16]
  i2488.particleRaycastBudget = i2489[17]
  i2488.pixelLightCount = i2489[18]
  i2488.realtimeReflectionProbes = !!i2489[19]
  i2488.shadowCascade2Split = i2489[20]
  i2488.shadowCascade4Split = new pc.Vec3( i2489[21], i2489[22], i2489[23] )
  i2488.streamingMipmapsActive = !!i2489[24]
  i2488.vSyncCount = i2489[25]
  i2488.asyncUploadBufferSize = i2489[26]
  i2488.asyncUploadTimeSlice = i2489[27]
  i2488.billboardsFaceCameraPosition = !!i2489[28]
  i2488.shadowNearPlaneOffset = i2489[29]
  i2488.streamingMipmapsMemoryBudget = i2489[30]
  i2488.maximumLODLevel = i2489[31]
  i2488.streamingMipmapsAddAllCameras = !!i2489[32]
  i2488.streamingMipmapsMaxLevelReduction = i2489[33]
  i2488.streamingMipmapsRenderersPerFrame = i2489[34]
  i2488.resolutionScalingFixedDPIFactor = i2489[35]
  i2488.streamingMipmapsMaxFileIORequests = i2489[36]
  i2488.currentQualityLevel = i2489[37]
  return i2488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i2496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i2497 = data
  var i2499 = i2497[0]
  var i2498 = []
  for(var i = 0; i < i2499.length; i += 1) {
    i2498.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i2499[i + 0]) );
  }
  i2496.groups = i2498
  var i2501 = i2497[1]
  var i2500 = []
  for(var i = 0; i < i2501.length; i += 1) {
    i2500.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i2501[i + 0]) );
  }
  i2496.snapshots = i2500
  return i2496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i2504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i2505 = data
  i2504.id = i2505[0]
  i2504.childGroupIds = i2505[1]
  i2504.name = i2505[2]
  return i2504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i2508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i2509 = data
  i2508.id = i2509[0]
  var i2511 = i2509[1]
  var i2510 = []
  for(var i = 0; i < i2511.length; i += 1) {
    i2510.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i2511[i + 0]) );
  }
  i2508.parameters = i2510
  return i2508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i2514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i2515 = data
  i2514.name = i2515[0]
  i2514.value = i2515[1]
  return i2514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2519 = data
  i2518.weight = i2519[0]
  i2518.vertices = i2519[1]
  i2518.normals = i2519[2]
  i2518.tangents = i2519[3]
  return i2518
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"71":[72],"73":[72],"74":[72],"75":[72],"76":[72],"77":[72],"78":[79],"80":[53],"81":[82],"83":[82],"84":[82],"85":[82],"86":[82],"87":[82],"88":[82],"89":[38],"90":[38],"91":[38],"92":[38],"93":[38],"94":[38],"95":[38],"96":[38],"97":[38],"98":[38],"99":[38],"100":[38],"101":[38],"102":[53],"103":[29],"104":[105],"106":[105],"24":[23],"107":[108],"109":[11],"110":[13],"111":[11],"112":[113],"114":[113],"115":[41],"116":[13],"117":[11],"118":[10],"34":[11],"119":[23],"120":[23],"27":[24],"58":[30,23],"121":[23],"26":[24],"122":[23],"123":[23],"124":[23],"125":[23],"126":[23],"127":[23],"128":[23],"129":[23],"130":[23],"131":[30,23],"132":[23],"133":[23],"134":[23],"135":[23],"12":[30,23],"136":[23],"137":[64],"138":[64],"65":[64],"139":[64],"140":[53],"141":[53]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","Level1_Cloth_Playable_PlayableStep4","UnityEngine.GameObject","BasicDrag","UnityEngine.SpriteRenderer","UnityEngine.UI.Text","UnityEngine.BoxCollider2D","UnityEngine.AudioClip","BD_CameraFollow","UnityEngine.Sprite","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","PlayableFadeCoverSettings","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","RotaryTimerKnob","UnityEngine.MeshRenderer","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteMask","_2dxFX_Wave","BD_Clamp","UnityEngine.Rigidbody2D","PlaceItem","ActionOnTap","DG.Tweening.DOTweenAnimation","UnityEngine.CircleCollider2D","PlayParticlesOnCollision","UnityEngine.PolygonCollider2D","PlaySfxOnCollision","UnityEditor.Audio.AudioMixerGroupController","SewingCol","BD_Progress","BD_Action","UnityEngine.MeshFilter","StaticFixedPipe","BD_SpriteChange","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.UI.Image","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","PlayableRouter","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","UnityEngine.LineRenderer","BD_Fold","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","SpriteButton","RadialCircleFill","TeaseTapCTA","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "10/28/2026 09:44:32";

Deserializers.lunaDaysRunning = "28.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "MakeoverFashionASMR_Lvl1_2_Step_4_25Nov2026";

Deserializers.lunaAppID = "42211";

Deserializers.projectId = "0ba141233dac4ae439f0736e4efac688";

Deserializers.packagesInfo = "com.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1630";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4348";

Deserializers.runtimeAnalysisExcludedModules = "physics3d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "False";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "HMBL.";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.hmbl.perfect.makeover.fashion.asmr";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "921b93fa-7cb7-47c3-99b3-a6b6cc9a76ce";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

