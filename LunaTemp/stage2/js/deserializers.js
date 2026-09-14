var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1848 = root || request.c( 'UnityEngine.JointSpring' )
  var i1849 = data
  i1848.spring = i1849[0]
  i1848.damper = i1849[1]
  i1848.targetPosition = i1849[2]
  return i1848
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1850 = root || request.c( 'UnityEngine.JointMotor' )
  var i1851 = data
  i1850.m_TargetVelocity = i1851[0]
  i1850.m_Force = i1851[1]
  i1850.m_FreeSpin = i1851[2]
  return i1850
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1852 = root || request.c( 'UnityEngine.JointLimits' )
  var i1853 = data
  i1852.m_Min = i1853[0]
  i1852.m_Max = i1853[1]
  i1852.m_Bounciness = i1853[2]
  i1852.m_BounceMinVelocity = i1853[3]
  i1852.m_ContactDistance = i1853[4]
  i1852.minBounce = i1853[5]
  i1852.maxBounce = i1853[6]
  return i1852
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1854 = root || request.c( 'UnityEngine.JointDrive' )
  var i1855 = data
  i1854.m_PositionSpring = i1855[0]
  i1854.m_PositionDamper = i1855[1]
  i1854.m_MaximumForce = i1855[2]
  i1854.m_UseAcceleration = i1855[3]
  return i1854
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1856 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1857 = data
  i1856.m_Spring = i1857[0]
  i1856.m_Damper = i1857[1]
  return i1856
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1858 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1859 = data
  i1858.m_Limit = i1859[0]
  i1858.m_Bounciness = i1859[1]
  i1858.m_ContactDistance = i1859[2]
  return i1858
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1860 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1861 = data
  i1860.m_ExtremumSlip = i1861[0]
  i1860.m_ExtremumValue = i1861[1]
  i1860.m_AsymptoteSlip = i1861[2]
  i1860.m_AsymptoteValue = i1861[3]
  i1860.m_Stiffness = i1861[4]
  return i1860
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1862 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1863 = data
  i1862.m_LowerAngle = i1863[0]
  i1862.m_UpperAngle = i1863[1]
  return i1862
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1864 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1865 = data
  i1864.m_MotorSpeed = i1865[0]
  i1864.m_MaximumMotorTorque = i1865[1]
  return i1864
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1866 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1867 = data
  i1866.m_DampingRatio = i1867[0]
  i1866.m_Frequency = i1867[1]
  i1866.m_Angle = i1867[2]
  return i1866
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1868 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1869 = data
  i1868.m_LowerTranslation = i1869[0]
  i1868.m_UpperTranslation = i1869[1]
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1870 = root || new pc.UnityMaterial()
  var i1871 = data
  i1870.name = i1871[0]
  request.r(i1871[1], i1871[2], 0, i1870, 'shader')
  i1870.renderQueue = i1871[3]
  i1870.enableInstancing = !!i1871[4]
  var i1873 = i1871[5]
  var i1872 = []
  for(var i = 0; i < i1873.length; i += 1) {
    i1872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1873[i + 0]) );
  }
  i1870.floatParameters = i1872
  var i1875 = i1871[6]
  var i1874 = []
  for(var i = 0; i < i1875.length; i += 1) {
    i1874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1875[i + 0]) );
  }
  i1870.colorParameters = i1874
  var i1877 = i1871[7]
  var i1876 = []
  for(var i = 0; i < i1877.length; i += 1) {
    i1876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1877[i + 0]) );
  }
  i1870.vectorParameters = i1876
  var i1879 = i1871[8]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1879[i + 0]) );
  }
  i1870.textureParameters = i1878
  var i1881 = i1871[9]
  var i1880 = []
  for(var i = 0; i < i1881.length; i += 1) {
    i1880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1881[i + 0]) );
  }
  i1870.materialFlags = i1880
  return i1870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1885 = data
  i1884.name = i1885[0]
  i1884.value = i1885[1]
  return i1884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1889 = data
  i1888.name = i1889[0]
  i1888.value = new pc.Color(i1889[1], i1889[2], i1889[3], i1889[4])
  return i1888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1893 = data
  i1892.name = i1893[0]
  i1892.value = new pc.Vec4( i1893[1], i1893[2], i1893[3], i1893[4] )
  return i1892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1897 = data
  i1896.name = i1897[0]
  request.r(i1897[1], i1897[2], 0, i1896, 'value')
  return i1896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1901 = data
  i1900.name = i1901[0]
  i1900.enabled = !!i1901[1]
  return i1900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1903 = data
  i1902.name = i1903[0]
  i1902.width = i1903[1]
  i1902.height = i1903[2]
  i1902.mipmapCount = i1903[3]
  i1902.anisoLevel = i1903[4]
  i1902.filterMode = i1903[5]
  i1902.hdr = !!i1903[6]
  i1902.format = i1903[7]
  i1902.wrapMode = i1903[8]
  i1902.alphaIsTransparency = !!i1903[9]
  i1902.alphaSource = i1903[10]
  i1902.graphicsFormat = i1903[11]
  i1902.sRGBTexture = !!i1903[12]
  i1902.desiredColorSpace = i1903[13]
  i1902.wrapU = i1903[14]
  i1902.wrapV = i1903[15]
  return i1902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1905 = data
  i1904.name = i1905[0]
  i1904.halfPrecision = !!i1905[1]
  i1904.useSimplification = !!i1905[2]
  i1904.useUInt32IndexFormat = !!i1905[3]
  i1904.vertexCount = i1905[4]
  i1904.aabb = i1905[5]
  var i1907 = i1905[6]
  var i1906 = []
  for(var i = 0; i < i1907.length; i += 1) {
    i1906.push( !!i1907[i + 0] );
  }
  i1904.streams = i1906
  i1904.vertices = i1905[7]
  var i1909 = i1905[8]
  var i1908 = []
  for(var i = 0; i < i1909.length; i += 1) {
    i1908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1909[i + 0]) );
  }
  i1904.subMeshes = i1908
  var i1911 = i1905[9]
  var i1910 = []
  for(var i = 0; i < i1911.length; i += 16) {
    i1910.push( new pc.Mat4().setData(i1911[i + 0], i1911[i + 1], i1911[i + 2], i1911[i + 3],  i1911[i + 4], i1911[i + 5], i1911[i + 6], i1911[i + 7],  i1911[i + 8], i1911[i + 9], i1911[i + 10], i1911[i + 11],  i1911[i + 12], i1911[i + 13], i1911[i + 14], i1911[i + 15]) );
  }
  i1904.bindposes = i1910
  var i1913 = i1905[10]
  var i1912 = []
  for(var i = 0; i < i1913.length; i += 1) {
    i1912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1913[i + 0]) );
  }
  i1904.blendShapes = i1912
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1919 = data
  i1918.triangles = i1919[0]
  return i1918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1925 = data
  i1924.name = i1925[0]
  var i1927 = i1925[1]
  var i1926 = []
  for(var i = 0; i < i1927.length; i += 1) {
    i1926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1927[i + 0]) );
  }
  i1924.frames = i1926
  return i1924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1929 = data
  i1928.position = new pc.Vec3( i1929[0], i1929[1], i1929[2] )
  i1928.scale = new pc.Vec3( i1929[3], i1929[4], i1929[5] )
  i1928.rotation = new pc.Quat(i1929[6], i1929[7], i1929[8], i1929[9])
  return i1928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1931 = data
  i1930.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1931[0], i1930.main)
  i1930.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1931[1], i1930.colorBySpeed)
  i1930.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1931[2], i1930.colorOverLifetime)
  i1930.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1931[3], i1930.emission)
  i1930.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1931[4], i1930.rotationBySpeed)
  i1930.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1931[5], i1930.rotationOverLifetime)
  i1930.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1931[6], i1930.shape)
  i1930.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1931[7], i1930.sizeBySpeed)
  i1930.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1931[8], i1930.sizeOverLifetime)
  i1930.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1931[9], i1930.textureSheetAnimation)
  i1930.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1931[10], i1930.velocityOverLifetime)
  i1930.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1931[11], i1930.noise)
  i1930.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1931[12], i1930.inheritVelocity)
  i1930.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1931[13], i1930.forceOverLifetime)
  i1930.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1931[14], i1930.limitVelocityOverLifetime)
  i1930.useAutoRandomSeed = !!i1931[15]
  i1930.randomSeed = i1931[16]
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1932 = root || new pc.ParticleSystemMain()
  var i1933 = data
  i1932.duration = i1933[0]
  i1932.loop = !!i1933[1]
  i1932.prewarm = !!i1933[2]
  i1932.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1933[3], i1932.startDelay)
  i1932.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1933[4], i1932.startLifetime)
  i1932.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1933[5], i1932.startSpeed)
  i1932.startSize3D = !!i1933[6]
  i1932.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1933[7], i1932.startSizeX)
  i1932.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1933[8], i1932.startSizeY)
  i1932.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1933[9], i1932.startSizeZ)
  i1932.startRotation3D = !!i1933[10]
  i1932.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1933[11], i1932.startRotationX)
  i1932.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1933[12], i1932.startRotationY)
  i1932.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1933[13], i1932.startRotationZ)
  i1932.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1933[14], i1932.startColor)
  i1932.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1933[15], i1932.gravityModifier)
  i1932.simulationSpace = i1933[16]
  request.r(i1933[17], i1933[18], 0, i1932, 'customSimulationSpace')
  i1932.simulationSpeed = i1933[19]
  i1932.useUnscaledTime = !!i1933[20]
  i1932.scalingMode = i1933[21]
  i1932.playOnAwake = !!i1933[22]
  i1932.maxParticles = i1933[23]
  i1932.emitterVelocityMode = i1933[24]
  i1932.stopAction = i1933[25]
  return i1932
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1934 = root || new pc.MinMaxCurve()
  var i1935 = data
  i1934.mode = i1935[0]
  i1934.curveMin = new pc.AnimationCurve( { keys_flow: i1935[1] } )
  i1934.curveMax = new pc.AnimationCurve( { keys_flow: i1935[2] } )
  i1934.curveMultiplier = i1935[3]
  i1934.constantMin = i1935[4]
  i1934.constantMax = i1935[5]
  return i1934
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1936 = root || new pc.MinMaxGradient()
  var i1937 = data
  i1936.mode = i1937[0]
  i1936.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1937[1], i1936.gradientMin)
  i1936.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1937[2], i1936.gradientMax)
  i1936.colorMin = new pc.Color(i1937[3], i1937[4], i1937[5], i1937[6])
  i1936.colorMax = new pc.Color(i1937[7], i1937[8], i1937[9], i1937[10])
  return i1936
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1939 = data
  i1938.mode = i1939[0]
  var i1941 = i1939[1]
  var i1940 = []
  for(var i = 0; i < i1941.length; i += 1) {
    i1940.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1941[i + 0]) );
  }
  i1938.colorKeys = i1940
  var i1943 = i1939[2]
  var i1942 = []
  for(var i = 0; i < i1943.length; i += 1) {
    i1942.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1943[i + 0]) );
  }
  i1938.alphaKeys = i1942
  return i1938
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1944 = root || new pc.ParticleSystemColorBySpeed()
  var i1945 = data
  i1944.enabled = !!i1945[0]
  i1944.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1945[1], i1944.color)
  i1944.range = new pc.Vec2( i1945[2], i1945[3] )
  return i1944
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1949 = data
  i1948.color = new pc.Color(i1949[0], i1949[1], i1949[2], i1949[3])
  i1948.time = i1949[4]
  return i1948
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1953 = data
  i1952.alpha = i1953[0]
  i1952.time = i1953[1]
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1954 = root || new pc.ParticleSystemColorOverLifetime()
  var i1955 = data
  i1954.enabled = !!i1955[0]
  i1954.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1955[1], i1954.color)
  return i1954
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1956 = root || new pc.ParticleSystemEmitter()
  var i1957 = data
  i1956.enabled = !!i1957[0]
  i1956.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[1], i1956.rateOverTime)
  i1956.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[2], i1956.rateOverDistance)
  var i1959 = i1957[3]
  var i1958 = []
  for(var i = 0; i < i1959.length; i += 1) {
    i1958.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1959[i + 0]) );
  }
  i1956.bursts = i1958
  return i1956
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1962 = root || new pc.ParticleSystemBurst()
  var i1963 = data
  i1962.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1963[0], i1962.count)
  i1962.cycleCount = i1963[1]
  i1962.minCount = i1963[2]
  i1962.maxCount = i1963[3]
  i1962.repeatInterval = i1963[4]
  i1962.time = i1963[5]
  return i1962
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1964 = root || new pc.ParticleSystemRotationBySpeed()
  var i1965 = data
  i1964.enabled = !!i1965[0]
  i1964.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1965[1], i1964.x)
  i1964.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1965[2], i1964.y)
  i1964.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1965[3], i1964.z)
  i1964.separateAxes = !!i1965[4]
  i1964.range = new pc.Vec2( i1965[5], i1965[6] )
  return i1964
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1966 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1967 = data
  i1966.enabled = !!i1967[0]
  i1966.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1967[1], i1966.x)
  i1966.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1967[2], i1966.y)
  i1966.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1967[3], i1966.z)
  i1966.separateAxes = !!i1967[4]
  return i1966
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1968 = root || new pc.ParticleSystemShape()
  var i1969 = data
  i1968.enabled = !!i1969[0]
  i1968.shapeType = i1969[1]
  i1968.randomDirectionAmount = i1969[2]
  i1968.sphericalDirectionAmount = i1969[3]
  i1968.randomPositionAmount = i1969[4]
  i1968.alignToDirection = !!i1969[5]
  i1968.radius = i1969[6]
  i1968.radiusMode = i1969[7]
  i1968.radiusSpread = i1969[8]
  i1968.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1969[9], i1968.radiusSpeed)
  i1968.radiusThickness = i1969[10]
  i1968.angle = i1969[11]
  i1968.length = i1969[12]
  i1968.boxThickness = new pc.Vec3( i1969[13], i1969[14], i1969[15] )
  i1968.meshShapeType = i1969[16]
  request.r(i1969[17], i1969[18], 0, i1968, 'mesh')
  request.r(i1969[19], i1969[20], 0, i1968, 'meshRenderer')
  request.r(i1969[21], i1969[22], 0, i1968, 'skinnedMeshRenderer')
  i1968.useMeshMaterialIndex = !!i1969[23]
  i1968.meshMaterialIndex = i1969[24]
  i1968.useMeshColors = !!i1969[25]
  i1968.normalOffset = i1969[26]
  i1968.arc = i1969[27]
  i1968.arcMode = i1969[28]
  i1968.arcSpread = i1969[29]
  i1968.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1969[30], i1968.arcSpeed)
  i1968.donutRadius = i1969[31]
  i1968.position = new pc.Vec3( i1969[32], i1969[33], i1969[34] )
  i1968.rotation = new pc.Vec3( i1969[35], i1969[36], i1969[37] )
  i1968.scale = new pc.Vec3( i1969[38], i1969[39], i1969[40] )
  return i1968
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1970 = root || new pc.ParticleSystemSizeBySpeed()
  var i1971 = data
  i1970.enabled = !!i1971[0]
  i1970.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1971[1], i1970.x)
  i1970.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1971[2], i1970.y)
  i1970.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1971[3], i1970.z)
  i1970.separateAxes = !!i1971[4]
  i1970.range = new pc.Vec2( i1971[5], i1971[6] )
  return i1970
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1972 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1973 = data
  i1972.enabled = !!i1973[0]
  i1972.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1973[1], i1972.x)
  i1972.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1973[2], i1972.y)
  i1972.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1973[3], i1972.z)
  i1972.separateAxes = !!i1973[4]
  return i1972
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1974 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1975 = data
  i1974.enabled = !!i1975[0]
  i1974.mode = i1975[1]
  i1974.animation = i1975[2]
  i1974.numTilesX = i1975[3]
  i1974.numTilesY = i1975[4]
  i1974.useRandomRow = !!i1975[5]
  i1974.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1975[6], i1974.frameOverTime)
  i1974.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1975[7], i1974.startFrame)
  i1974.cycleCount = i1975[8]
  i1974.rowIndex = i1975[9]
  i1974.flipU = i1975[10]
  i1974.flipV = i1975[11]
  i1974.spriteCount = i1975[12]
  var i1977 = i1975[13]
  var i1976 = []
  for(var i = 0; i < i1977.length; i += 2) {
  request.r(i1977[i + 0], i1977[i + 1], 2, i1976, '')
  }
  i1974.sprites = i1976
  return i1974
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1980 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1981 = data
  i1980.enabled = !!i1981[0]
  i1980.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1981[1], i1980.x)
  i1980.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1981[2], i1980.y)
  i1980.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1981[3], i1980.z)
  i1980.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1981[4], i1980.radial)
  i1980.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1981[5], i1980.speedModifier)
  i1980.space = i1981[6]
  i1980.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1981[7], i1980.orbitalX)
  i1980.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1981[8], i1980.orbitalY)
  i1980.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1981[9], i1980.orbitalZ)
  i1980.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1981[10], i1980.orbitalOffsetX)
  i1980.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1981[11], i1980.orbitalOffsetY)
  i1980.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1981[12], i1980.orbitalOffsetZ)
  return i1980
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1982 = root || new pc.ParticleSystemNoise()
  var i1983 = data
  i1982.enabled = !!i1983[0]
  i1982.separateAxes = !!i1983[1]
  i1982.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1983[2], i1982.strengthX)
  i1982.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1983[3], i1982.strengthY)
  i1982.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1983[4], i1982.strengthZ)
  i1982.frequency = i1983[5]
  i1982.damping = !!i1983[6]
  i1982.octaveCount = i1983[7]
  i1982.octaveMultiplier = i1983[8]
  i1982.octaveScale = i1983[9]
  i1982.quality = i1983[10]
  i1982.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1983[11], i1982.scrollSpeed)
  i1982.scrollSpeedMultiplier = i1983[12]
  i1982.remapEnabled = !!i1983[13]
  i1982.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1983[14], i1982.remapX)
  i1982.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1983[15], i1982.remapY)
  i1982.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1983[16], i1982.remapZ)
  i1982.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1983[17], i1982.positionAmount)
  i1982.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1983[18], i1982.rotationAmount)
  i1982.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1983[19], i1982.sizeAmount)
  return i1982
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1984 = root || new pc.ParticleSystemInheritVelocity()
  var i1985 = data
  i1984.enabled = !!i1985[0]
  i1984.mode = i1985[1]
  i1984.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1985[2], i1984.curve)
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1986 = root || new pc.ParticleSystemForceOverLifetime()
  var i1987 = data
  i1986.enabled = !!i1987[0]
  i1986.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1987[1], i1986.x)
  i1986.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1987[2], i1986.y)
  i1986.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1987[3], i1986.z)
  i1986.space = i1987[4]
  i1986.randomized = !!i1987[5]
  return i1986
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1988 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1989 = data
  i1988.enabled = !!i1989[0]
  i1988.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1989[1], i1988.limit)
  i1988.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1989[2], i1988.limitX)
  i1988.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1989[3], i1988.limitY)
  i1988.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1989[4], i1988.limitZ)
  i1988.dampen = i1989[5]
  i1988.separateAxes = !!i1989[6]
  i1988.space = i1989[7]
  i1988.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1989[8], i1988.drag)
  i1988.multiplyDragByParticleSize = !!i1989[9]
  i1988.multiplyDragByParticleVelocity = !!i1989[10]
  return i1988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1991 = data
  request.r(i1991[0], i1991[1], 0, i1990, 'mesh')
  i1990.meshCount = i1991[2]
  i1990.activeVertexStreamsCount = i1991[3]
  i1990.alignment = i1991[4]
  i1990.renderMode = i1991[5]
  i1990.sortMode = i1991[6]
  i1990.lengthScale = i1991[7]
  i1990.velocityScale = i1991[8]
  i1990.cameraVelocityScale = i1991[9]
  i1990.normalDirection = i1991[10]
  i1990.sortingFudge = i1991[11]
  i1990.minParticleSize = i1991[12]
  i1990.maxParticleSize = i1991[13]
  i1990.pivot = new pc.Vec3( i1991[14], i1991[15], i1991[16] )
  request.r(i1991[17], i1991[18], 0, i1990, 'trailMaterial')
  i1990.applyActiveColorSpace = !!i1991[19]
  i1990.enabled = !!i1991[20]
  request.r(i1991[21], i1991[22], 0, i1990, 'sharedMaterial')
  var i1993 = i1991[23]
  var i1992 = []
  for(var i = 0; i < i1993.length; i += 2) {
  request.r(i1993[i + 0], i1993[i + 1], 2, i1992, '')
  }
  i1990.sharedMaterials = i1992
  i1990.receiveShadows = !!i1991[24]
  i1990.shadowCastingMode = i1991[25]
  i1990.sortingLayerID = i1991[26]
  i1990.sortingOrder = i1991[27]
  i1990.lightmapIndex = i1991[28]
  i1990.lightmapSceneIndex = i1991[29]
  i1990.lightmapScaleOffset = new pc.Vec4( i1991[30], i1991[31], i1991[32], i1991[33] )
  i1990.lightProbeUsage = i1991[34]
  i1990.reflectionProbeUsage = i1991[35]
  return i1990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1997 = data
  i1996.name = i1997[0]
  i1996.tagId = i1997[1]
  i1996.enabled = !!i1997[2]
  i1996.isStatic = !!i1997[3]
  i1996.layer = i1997[4]
  return i1996
}

Deserializers["Level1_Shower_Playable"] = function (request, data, root) {
  var i1998 = root || request.c( 'Level1_Shower_Playable' )
  var i1999 = data
  i1998.MainZoom = request.d('ZoomPos', i1999[0], i1998.MainZoom)
  request.r(i1999[1], i1999[2], 0, i1998, 'view1')
  request.r(i1999[3], i1999[4], 0, i1998, 'view2')
  i1998.ZoomStep1 = request.d('ZoomPos', i1999[5], i1998.ZoomStep1)
  request.r(i1999[6], i1999[7], 0, i1998, 'ToolStep1')
  request.r(i1999[8], i1999[9], 0, i1998, 'ToolStep1CameraFollow')
  request.r(i1999[10], i1999[11], 0, i1998, 'jarRenderer')
  request.r(i1999[12], i1999[13], 0, i1998, 'insideJarPosition')
  i1998.jarJumpHeight = i1999[14]
  i1998.jarJumpDuration = i1999[15]
  i1998.jarDropDuration = i1999[16]
  request.r(i1999[17], i1999[18], 0, i1998, 'ShowerDropClip')
  i1998.ZoomStep2 = request.d('ZoomPos', i1999[19], i1998.ZoomStep2)
  request.r(i1999[20], i1999[21], 0, i1998, 'ToolStep2')
  request.r(i1999[22], i1999[23], 0, i1998, 'ToolStep2_CapAnim')
  var i2001 = i1999[24]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 2) {
  request.r(i2001[i + 0], i2001[i + 1], 2, i2000, '')
  }
  i1998.cleanAcid = i2000
  var i2003 = i1999[25]
  var i2002 = []
  for(var i = 0; i < i2003.length; i += 2) {
  request.r(i2003[i + 0], i2003[i + 1], 2, i2002, '')
  }
  i1998.dirtyAcid = i2002
  request.r(i1999[26], i1999[27], 0, i1998, 'boilingParticles')
  request.r(i1999[28], i1999[29], 0, i1998, 'showerBeforeAcid')
  request.r(i1999[30], i1999[31], 0, i1998, 'showerAfterAcid')
  request.r(i1999[32], i1999[33], 0, i1998, 'CapOpenClip')
  request.r(i1999[34], i1999[35], 0, i1998, 'ShowerOutClip')
  request.r(i1999[36], i1999[37], 0, i1998, 'BoilingSource')
  i1998.ZoomStep3 = request.d('ZoomPos', i1999[38], i1998.ZoomStep3)
  request.r(i1999[39], i1999[40], 0, i1998, 'ToolStep3')
  request.r(i1999[41], i1999[42], 0, i1998, 'camFollowStep3')
  request.r(i1999[43], i1999[44], 0, i1998, 'wrinkleLayer')
  i1998.ZoomStep4 = request.d('ZoomPos', i1999[45], i1998.ZoomStep4)
  request.r(i1999[46], i1999[47], 0, i1998, 'ToolStep4')
  request.r(i1999[48], i1999[49], 0, i1998, 'camFollowStep4')
  request.r(i1999[50], i1999[51], 0, i1998, 'starsParticles')
  i1998.levelName = i1999[52]
  i1998.levelReward = i1999[53]
  request.r(i1999[54], i1999[55], 0, i1998, 'LevelIcon')
  request.r(i1999[56], i1999[57], 0, i1998, 'Level_BG')
  var i2005 = i1999[58]
  var i2004 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2005.length; i += 2) {
  request.r(i2005[i + 0], i2005[i + 1], 1, i2004, '')
  }
  i1998.ToolIcons = i2004
  var i2007 = i1999[59]
  var i2006 = []
  for(var i = 0; i < i2007.length; i += 2) {
  request.r(i2007[i + 0], i2007[i + 1], 2, i2006, '')
  }
  i1998.AllDrags = i2006
  var i2009 = i1999[60]
  var i2008 = []
  for(var i = 0; i < i2009.length; i += 2) {
  request.r(i2009[i + 0], i2009[i + 1], 2, i2008, '')
  }
  i1998.AllSources = i2008
  var i2011 = i1999[61]
  var i2010 = []
  for(var i = 0; i < i2011.length; i += 2) {
  request.r(i2011[i + 0], i2011[i + 1], 2, i2010, '')
  }
  i1998.AllScratches = i2010
  i1998.stepsDone = i1999[62]
  i1998.levelNo = i1999[63]
  i1998.partNo = i1999[64]
  var i2013 = i1999[65]
  var i2012 = []
  for(var i = 0; i < i2013.length; i += 2) {
  request.r(i2013[i + 0], i2013[i + 1], 2, i2012, '')
  }
  i1998.disableOnLevelComplete = i2012
  return i1998
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i2014 = root || request.c( 'ZoomPos' )
  var i2015 = data
  i2014.CameraPos = new pc.Vec3( i2015[0], i2015[1], i2015[2] )
  i2014.CameraFOV = i2015[3]
  return i2014
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i2028 = root || request.c( 'PlayableCTA' )
  var i2029 = data
  i2028.trigger = i2029[0]
  i2028.afterSeconds = i2029[1]
  i2028.afterTaps = i2029[2]
  request.r(i2029[3], i2029[4], 0, i2028, 'scratchProgress')
  i2028.scratchIndex = i2029[5]
  i2028.progressThreshold = i2029[6]
  request.r(i2029[7], i2029[8], 0, i2028, 'watchedTool')
  i2028.blockInputOnFire = !!i2029[9]
  i2028.refireOnEveryTap = !!i2029[10]
  i2028.refireDelay = i2029[11]
  i2028.showEndCard = !!i2029[12]
  request.r(i2029[13], i2029[14], 0, i2028, 'endCard')
  var i2031 = i2029[15]
  var i2030 = []
  for(var i = 0; i < i2031.length; i += 2) {
  request.r(i2031[i + 0], i2031[i + 1], 2, i2030, '')
  }
  i2028.thingsToDisableOnEndCard = i2030
  i2028.endCardDelay = i2029[16]
  i2028.showEndCardOnProgressTrigger = !!i2029[17]
  i2028.showEndCardOnToolAppearTrigger = !!i2029[18]
  i2028.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i2029[19], i2028.onCtaFired)
  i2028.logWhenFired = !!i2029[20]
  return i2028
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2032 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2033 = data
  i2032.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2033[0], i2032.m_PersistentCalls)
  return i2032
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2034 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2035 = data
  var i2037 = i2035[0]
  var i2036 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2037.length; i += 1) {
    i2036.add(request.d('UnityEngine.Events.PersistentCall', i2037[i + 0]));
  }
  i2034.m_Calls = i2036
  return i2034
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2040 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2041 = data
  request.r(i2041[0], i2041[1], 0, i2040, 'm_Target')
  i2040.m_TargetAssemblyTypeName = i2041[2]
  i2040.m_MethodName = i2041[3]
  i2040.m_Mode = i2041[4]
  i2040.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2041[5], i2040.m_Arguments)
  i2040.m_CallState = i2041[6]
  return i2040
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i2042 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i2043 = data
  request.r(i2043[0], i2043[1], 0, i2042, 'MainCamera')
  i2042.RenderType = i2043[2]
  request.r(i2043[3], i2043[4], 0, i2042, 'ScratchSurfaceSprite')
  i2042.ScratchSurfaceSpriteHasAlpha = !!i2043[5]
  i2042.MaskProgressCutOffValue = i2043[6]
  request.r(i2043[7], i2043[8], 0, i2042, 'EraseTexture')
  i2042.EraseTextureScale = new pc.Vec2( i2043[9], i2043[10] )
  i2042.InputEnabled = !!i2043[11]
  request.r(i2043[12], i2043[13], 0, i2042, 'Card')
  i2042.Mode = i2043[14]
  request.r(i2043[15], i2043[16], 0, i2042, 'Progress')
  request.r(i2043[17], i2043[18], 0, i2042, 'MeshCard')
  request.r(i2043[19], i2043[20], 0, i2042, 'SpriteCard')
  request.r(i2043[21], i2043[22], 0, i2042, 'ImageCard')
  request.r(i2043[23], i2043[24], 0, i2042, 'MaskShader')
  request.r(i2043[25], i2043[26], 0, i2042, 'BrushShader')
  request.r(i2043[27], i2043[28], 0, i2042, 'MaskProgressShader')
  request.r(i2043[29], i2043[30], 0, i2042, 'MaskProgressCutOffShader')
  return i2042
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i2044 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i2045 = data
  request.r(i2045[0], i2045[1], 0, i2044, 'MainCamera')
  request.r(i2045[2], i2045[3], 0, i2044, 'Surface')
  i2044.RenderTextureQuality = i2045[4]
  request.r(i2045[5], i2045[6], 0, i2044, 'Eraser')
  request.r(i2045[7], i2045[8], 0, i2044, 'Progress')
  request.r(i2045[9], i2045[10], 0, i2044, 'ScratchSurface')
  request.r(i2045[11], i2045[12], 0, i2044, 'RenderTexture')
  i2044.BrushScale = new pc.Vec2( i2045[13], i2045[14] )
  request.r(i2045[15], i2045[16], 0, i2044, 'ToolTip')
  i2044.InputEnabled = !!i2045[17]
  i2044.IsScratching = !!i2045[18]
  i2044.useChangingScale = !!i2045[19]
  i2044.useGivenBrushScale = !!i2045[20]
  i2044.canSpreadMask = !!i2045[21]
  i2044.shouldPaintHoles = !!i2045[22]
  i2044.canRotateTip = !!i2045[23]
  i2044._mode = i2045[24]
  return i2044
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i2046 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i2047 = data
  request.r(i2047[0], i2047[1], 0, i2046, 'Card')
  i2046.currentProgress = i2047[2]
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2049 = data
  request.r(i2049[0], i2049[1], 0, i2048, 'animatorController')
  request.r(i2049[2], i2049[3], 0, i2048, 'avatar')
  i2048.updateMode = i2049[4]
  i2048.hasTransformHierarchy = !!i2049[5]
  i2048.applyRootMotion = !!i2049[6]
  var i2051 = i2049[7]
  var i2050 = []
  for(var i = 0; i < i2051.length; i += 2) {
  request.r(i2051[i + 0], i2051[i + 1], 2, i2050, '')
  }
  i2048.humanBones = i2050
  i2048.enabled = !!i2049[8]
  return i2048
}

Deserializers["BD_AnimationHelper"] = function (request, data, root) {
  var i2054 = root || request.c( 'BD_AnimationHelper' )
  var i2055 = data
  i2054.OnAnimationComplete = request.d('UnityEngine.Events.UnityEvent', i2055[0], i2054.OnAnimationComplete)
  request.r(i2055[1], i2055[2], 0, i2054, 'sfxClip')
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2057 = data
  i2056.color = new pc.Color(i2057[0], i2057[1], i2057[2], i2057[3])
  request.r(i2057[4], i2057[5], 0, i2056, 'sprite')
  i2056.flipX = !!i2057[6]
  i2056.flipY = !!i2057[7]
  i2056.drawMode = i2057[8]
  i2056.size = new pc.Vec2( i2057[9], i2057[10] )
  i2056.tileMode = i2057[11]
  i2056.adaptiveModeThreshold = i2057[12]
  i2056.maskInteraction = i2057[13]
  i2056.spriteSortPoint = i2057[14]
  i2056.enabled = !!i2057[15]
  request.r(i2057[16], i2057[17], 0, i2056, 'sharedMaterial')
  var i2059 = i2057[18]
  var i2058 = []
  for(var i = 0; i < i2059.length; i += 2) {
  request.r(i2059[i + 0], i2059[i + 1], 2, i2058, '')
  }
  i2056.sharedMaterials = i2058
  i2056.receiveShadows = !!i2057[19]
  i2056.shadowCastingMode = i2057[20]
  i2056.sortingLayerID = i2057[21]
  i2056.sortingOrder = i2057[22]
  i2056.lightmapIndex = i2057[23]
  i2056.lightmapSceneIndex = i2057[24]
  i2056.lightmapScaleOffset = new pc.Vec4( i2057[25], i2057[26], i2057[27], i2057[28] )
  i2056.lightProbeUsage = i2057[29]
  i2056.reflectionProbeUsage = i2057[30]
  return i2056
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i2060 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i2061 = data
  request.r(i2061[0], i2061[1], 0, i2060, 'm_RootBone')
  var i2063 = i2061[2]
  var i2062 = []
  for(var i = 0; i < i2063.length; i += 2) {
  request.r(i2063[i + 0], i2063[i + 1], 2, i2062, '')
  }
  i2060.m_BoneTransforms = i2062
  i2060.m_AlwaysUpdate = !!i2061[3]
  i2060.m_AutoRebind = !!i2061[4]
  return i2060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2065 = data
  request.r(i2065[0], i2065[1], 0, i2064, 'clip')
  request.r(i2065[2], i2065[3], 0, i2064, 'outputAudioMixerGroup')
  i2064.playOnAwake = !!i2065[4]
  i2064.loop = !!i2065[5]
  i2064.time = i2065[6]
  i2064.volume = i2065[7]
  i2064.pitch = i2065[8]
  i2064.enabled = !!i2065[9]
  return i2064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2067 = data
  i2066.usedByComposite = !!i2067[0]
  i2066.autoTiling = !!i2067[1]
  i2066.size = new pc.Vec2( i2067[2], i2067[3] )
  i2066.edgeRadius = i2067[4]
  i2066.enabled = !!i2067[5]
  i2066.isTrigger = !!i2067[6]
  i2066.usedByEffector = !!i2067[7]
  i2066.density = i2067[8]
  i2066.offset = new pc.Vec2( i2067[9], i2067[10] )
  request.r(i2067[11], i2067[12], 0, i2066, 'material')
  return i2066
}

Deserializers["JarFillNoMask"] = function (request, data, root) {
  var i2068 = root || request.c( 'JarFillNoMask' )
  var i2069 = data
  request.r(i2069[0], i2069[1], 0, i2068, 'water')
  request.r(i2069[2], i2069[3], 0, i2068, 'jarFloor')
  request.r(i2069[4], i2069[5], 0, i2068, 'stream')
  request.r(i2069[6], i2069[7], 0, i2068, 'surface')
  i2068.surfaceOffset = i2069[8]
  request.r(i2069[9], i2069[10], 0, i2068, 'showWhenFull')
  return i2068
}

Deserializers["MatchTargetXPosition"] = function (request, data, root) {
  var i2070 = root || request.c( 'MatchTargetXPosition' )
  var i2071 = data
  request.r(i2071[0], i2071[1], 0, i2070, 'target')
  i2070.ClampX_L = i2071[2]
  i2070.ClampX_H = i2071[3]
  i2070.smoothFollow = !!i2071[4]
  i2070.smoothSpeed = i2071[5]
  i2070.useClamp = !!i2071[6]
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i2072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i2073 = data
  i2072.radius = i2073[0]
  i2072.enabled = !!i2073[1]
  i2072.isTrigger = !!i2073[2]
  i2072.usedByEffector = !!i2073[3]
  i2072.density = i2073[4]
  i2072.offset = new pc.Vec2( i2073[5], i2073[6] )
  request.r(i2073[7], i2073[8], 0, i2072, 'material')
  return i2072
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i2074 = root || request.c( 'PlaySfxOnCollision' )
  var i2075 = data
  request.r(i2075[0], i2075[1], 0, i2074, 'Tip')
  i2074.Mode = i2075[2]
  request.r(i2075[3], i2075[4], 0, i2074, 'DragInput')
  request.r(i2075[5], i2075[6], 0, i2074, 'Source')
  i2074.startVol = i2075[7]
  i2074.targetVol = i2075[8]
  i2074.duration = i2075[9]
  request.r(i2075[10], i2075[11], 0, i2074, 'Particles')
  i2074.isDone = !!i2075[12]
  i2074.isInArea = !!i2075[13]
  i2074.isPlaying = !!i2075[14]
  return i2074
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i2076 = root || request.c( 'PlayParticlesOnCollision' )
  var i2077 = data
  request.r(i2077[0], i2077[1], 0, i2076, 'Target')
  request.r(i2077[2], i2077[3], 0, i2076, 'ParticlePrefab')
  i2076.destroyIt = !!i2077[4]
  i2076.stayAtPlace = !!i2077[5]
  i2076.disableOnCollision = !!i2077[6]
  i2076.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i2077[7], i2076.OnCollisionEvent)
  return i2076
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i2078 = root || request.c( 'BasicDrag' )
  var i2079 = data
  i2078.canDrag = !!i2079[0]
  i2078.dragByDelta = !!i2079[1]
  i2078.isDragging = !!i2079[2]
  i2078.moveWithPointer = !!i2079[3]
  i2078.canReturn = !!i2079[4]
  i2078.jumpOnReturn = !!i2079[5]
  i2078.returnTime = i2079[6]
  i2078.Tool_Offset = new pc.Vec3( i2079[7], i2079[8], i2079[9] )
  i2078.canScaleIncrease = !!i2079[10]
  i2078.Self_ScaleNew = new pc.Vec3( i2079[11], i2079[12], i2079[13] )
  i2078.canRotateOnPick = !!i2079[14]
  i2078.startRot = new pc.Vec3( i2079[15], i2079[16], i2079[17] )
  i2078.newRot = new pc.Vec3( i2079[18], i2079[19], i2079[20] )
  var i2081 = i2079[21]
  var i2080 = []
  for(var i = 0; i < i2081.length; i += 2) {
  request.r(i2081[i + 0], i2081[i + 1], 2, i2080, '')
  }
  i2078.childSprite = i2080
  request.r(i2079[22], i2079[23], 0, i2078, 'ToolSelectClip')
  request.r(i2079[24], i2079[25], 0, i2078, 'ToolLoopClip')
  request.r(i2079[26], i2079[27], 0, i2078, 'thisParticles')
  i2078.onDragparticle = !!i2079[28]
  request.r(i2079[29], i2079[30], 0, i2078, 'dragParticles')
  request.r(i2079[31], i2079[32], 0, i2078, 'anim')
  i2078.startPos = new pc.Vec3( i2079[33], i2079[34], i2079[35] )
  i2078.startScale = new pc.Vec3( i2079[36], i2079[37], i2079[38] )
  i2078.Vibration = !!i2079[39]
  i2078.isPlacedCannotMove = !!i2079[40]
  i2078.isObjectMovingWhileDragging = !!i2079[41]
  i2078.OnMouseDownEvent = request.d('System.Action', i2079[42], i2078.OnMouseDownEvent)
  i2078.OnMouseUpEvent = request.d('System.Action', i2079[43], i2078.OnMouseUpEvent)
  i2078.ProgStartEvent = request.d('System.Action', i2079[44], i2078.ProgStartEvent)
  i2078.ProgEndEvent = request.d('System.Action', i2079[45], i2078.ProgEndEvent)
  i2078.canCallMouseUpWhenGamePaused = !!i2079[46]
  i2078.ClampX_L = i2079[47]
  i2078.ClampX_H = i2079[48]
  i2078.ClampY_L = i2079[49]
  i2078.ClampY_H = i2079[50]
  i2078.startOrder = i2079[51]
  i2078.dontResetItIsInCollider = !!i2079[52]
  request.r(i2079[53], i2079[54], 0, i2078, 'thisCollider')
  request.r(i2079[55], i2079[56], 0, i2078, 'thisSR')
  i2078.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i2079[57], i2078.OnMouseDownEventIndependentFromCanDrag)
  return i2078
}

Deserializers["System.Action"] = function (request, data, root) {
  var i2082 = root || request.c( 'System.Action' )
  var i2083 = data
  return i2082
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i2084 = root || request.c( 'BD_Clamp' )
  var i2085 = data
  i2084.ClampX_L = i2085[0]
  i2084.ClampX_H = i2085[1]
  i2084.ClampY_L = i2085[2]
  i2084.ClampY_H = i2085[3]
  return i2084
}

Deserializers["BD_ToolRotate"] = function (request, data, root) {
  var i2086 = root || request.c( 'BD_ToolRotate' )
  var i2087 = data
  i2086.startDelay = i2087[0]
  request.r(i2087[1], i2087[2], 0, i2086, 'Tool')
  request.r(i2087[3], i2087[4], 0, i2086, 'Clamp')
  request.r(i2087[5], i2087[6], 0, i2086, 'Pivot')
  i2086.MinAngle = new pc.Vec3( i2087[7], i2087[8], i2087[9] )
  i2086.MaxAngle = new pc.Vec3( i2087[10], i2087[11], i2087[12] )
  i2086.rotationSpeed = i2087[13]
  return i2086
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i2088 = root || request.c( 'BD_Action' )
  var i2089 = data
  i2088.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i2089[0], i2088.OnMouseDownEvent)
  i2088.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i2089[1], i2088.OnMouseUpEvent)
  i2088.setToolLayer = !!i2089[2]
  request.r(i2089[3], i2089[4], 0, i2088, 'tool_SP')
  return i2088
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2090 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2091 = data
  request.r(i2091[0], i2091[1], 0, i2090, 'm_ObjectArgument')
  i2090.m_ObjectArgumentAssemblyTypeName = i2091[2]
  i2090.m_IntArgument = i2091[3]
  i2090.m_FloatArgument = i2091[4]
  i2090.m_StringArgument = i2091[5]
  i2090.m_BoolArgument = !!i2091[6]
  return i2090
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i2092 = root || request.c( 'BD_CameraFollow' )
  var i2093 = data
  request.r(i2093[0], i2093[1], 0, i2092, 'Tool')
  request.r(i2093[2], i2093[3], 0, i2092, 'Pivot')
  i2092.FOV = i2093[4]
  i2092.Y_L = i2093[5]
  i2092.Y_H = i2093[6]
  i2092.X_L = i2093[7]
  i2092.X_R = i2093[8]
  i2092.startDelay = i2093[9]
  i2092.duration = i2093[10]
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i2094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i2095 = data
  i2094.bodyType = i2095[0]
  request.r(i2095[1], i2095[2], 0, i2094, 'material')
  i2094.simulated = !!i2095[3]
  i2094.useAutoMass = !!i2095[4]
  i2094.mass = i2095[5]
  i2094.drag = i2095[6]
  i2094.angularDrag = i2095[7]
  i2094.gravityScale = i2095[8]
  i2094.collisionDetectionMode = i2095[9]
  i2094.sleepMode = i2095[10]
  i2094.constraints = i2095[11]
  return i2094
}

Deserializers["JarDropTrigger"] = function (request, data, root) {
  var i2096 = root || request.c( 'JarDropTrigger' )
  var i2097 = data
  request.r(i2097[0], i2097[1], 0, i2096, 'jarTopTarget')
  i2096.OnHitJar = request.d('UnityEngine.Events.UnityEvent', i2097[2], i2096.OnHitJar)
  return i2096
}

Deserializers["BD_Audio"] = function (request, data, root) {
  var i2098 = root || request.c( 'BD_Audio' )
  var i2099 = data
  request.r(i2099[0], i2099[1], 0, i2098, 'BD')
  request.r(i2099[2], i2099[3], 0, i2098, 'Source')
  i2098.shouldRestart = !!i2099[4]
  i2098.startVol = i2099[5]
  i2098.targetVol = i2099[6]
  i2098.duration = i2099[7]
  i2098.startDelay = i2099[8]
  return i2098
}

Deserializers["AcidPourController"] = function (request, data, root) {
  var i2100 = root || request.c( 'AcidPourController' )
  var i2101 = data
  request.r(i2101[0], i2101[1], 0, i2100, 'thisTool')
  request.r(i2101[2], i2101[3], 0, i2100, 'acidPourVisual')
  request.r(i2101[4], i2101[5], 0, i2100, 'acidPourParticles')
  i2100.showDelay = i2101[6]
  request.r(i2101[7], i2101[8], 0, i2100, 'waterInJar')
  i2100.pourDuration = i2101[9]
  i2100.onPourComplete = request.d('UnityEngine.Events.UnityEvent', i2101[10], i2100.onPourComplete)
  return i2100
}

Deserializers["BD_SpriteAnim"] = function (request, data, root) {
  var i2102 = root || request.c( 'BD_SpriteAnim' )
  var i2103 = data
  request.r(i2103[0], i2103[1], 0, i2102, 'BD')
  request.r(i2103[2], i2103[3], 0, i2102, 'SR')
  var i2105 = i2103[4]
  var i2104 = []
  for(var i = 0; i < i2105.length; i += 2) {
  request.r(i2105[i + 0], i2105[i + 1], 2, i2104, '')
  }
  i2102.AllSprites = i2104
  i2102.changeSpeed = i2103[5]
  return i2102
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i2106 = root || request.c( 'BD_Progress' )
  var i2107 = data
  var i2109 = i2107[0]
  var i2108 = []
  for(var i = 0; i < i2109.length; i += 1) {
    i2108.push( request.d('ScratchData', i2109[i + 0]) );
  }
  i2106.AllScratches = i2108
  i2106.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i2107[1], i2106.OnScratchComplete)
  i2106.isProgDone = !!i2107[2]
  i2106.canCallComplete = !!i2107[3]
  i2106.CollectiveAppear = !!i2107[4]
  i2106.tipControl = !!i2107[5]
  i2106.progressControl = !!i2107[6]
  request.r(i2107[7], i2107[8], 0, i2106, 'thisDrag')
  i2106.CompleteEvent = request.d('System.Action', i2107[9], i2106.CompleteEvent)
  i2106.SubCompleteEvent = request.d('System.Action', i2107[10], i2106.SubCompleteEvent)
  return i2106
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i2112 = root || request.c( 'ScratchData' )
  var i2113 = data
  request.r(i2113[0], i2113[1], 0, i2112, 'ScratchManager')
  i2112.scratchLimit = i2113[2]
  i2112.isComplete = !!i2113[3]
  return i2112
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i2114 = root || request.c( 'BD_SpriteChange' )
  var i2115 = data
  request.r(i2115[0], i2115[1], 0, i2114, 'BD')
  request.r(i2115[2], i2115[3], 0, i2114, 'SR')
  request.r(i2115[4], i2115[5], 0, i2114, 'Default')
  request.r(i2115[6], i2115[7], 0, i2114, 'Picked')
  i2114.resetOnRelease = !!i2115[8]
  return i2114
}

Deserializers["DestroyObj"] = function (request, data, root) {
  var i2116 = root || request.c( 'DestroyObj' )
  var i2117 = data
  i2116.destroyDelay = i2117[0]
  return i2116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2119 = data
  i2118.name = i2119[0]
  i2118.atlasId = i2119[1]
  i2118.mipmapCount = i2119[2]
  i2118.hdr = !!i2119[3]
  i2118.size = i2119[4]
  i2118.anisoLevel = i2119[5]
  i2118.filterMode = i2119[6]
  var i2121 = i2119[7]
  var i2120 = []
  for(var i = 0; i < i2121.length; i += 4) {
    i2120.push( UnityEngine.Rect.MinMaxRect(i2121[i + 0], i2121[i + 1], i2121[i + 2], i2121[i + 3]) );
  }
  i2118.rects = i2120
  i2118.wrapU = i2119[8]
  i2118.wrapV = i2119[9]
  return i2118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2125 = data
  i2124.name = i2125[0]
  i2124.index = i2125[1]
  i2124.startup = !!i2125[2]
  return i2124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2127 = data
  i2126.aspect = i2127[0]
  i2126.orthographic = !!i2127[1]
  i2126.orthographicSize = i2127[2]
  i2126.backgroundColor = new pc.Color(i2127[3], i2127[4], i2127[5], i2127[6])
  i2126.nearClipPlane = i2127[7]
  i2126.farClipPlane = i2127[8]
  i2126.fieldOfView = i2127[9]
  i2126.depth = i2127[10]
  i2126.clearFlags = i2127[11]
  i2126.cullingMask = i2127[12]
  i2126.rect = i2127[13]
  request.r(i2127[14], i2127[15], 0, i2126, 'targetTexture')
  i2126.usePhysicalProperties = !!i2127[16]
  i2126.focalLength = i2127[17]
  i2126.sensorSize = new pc.Vec2( i2127[18], i2127[19] )
  i2126.lensShift = new pc.Vec2( i2127[20], i2127[21] )
  i2126.gateFit = i2127[22]
  i2126.commandBufferCount = i2127[23]
  i2126.cameraType = i2127[24]
  i2126.enabled = !!i2127[25]
  return i2126
}

Deserializers["CameraController"] = function (request, data, root) {
  var i2128 = root || request.c( 'CameraController' )
  var i2129 = data
  request.r(i2129[0], i2129[1], 0, i2128, 'cam')
  i2128.defaultPosition = new pc.Vec3( i2129[2], i2129[3], i2129[4] )
  i2128.defaultSize = i2129[5]
  i2128.defaultFOV = i2129[6]
  i2128.defaultDuration = i2129[7]
  i2128.defaultEase = i2129[8]
  return i2128
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i2130 = root || request.c( 'MusicSource' )
  var i2131 = data
  request.r(i2131[0], i2131[1], 0, i2130, 'source')
  return i2130
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i2132 = root || request.c( 'UI_Manager' )
  var i2133 = data
  i2132.levelCompleted = !!i2133[0]
  i2132.isPauseActive = !!i2133[1]
  i2132.loadIndex = i2133[2]
  request.r(i2133[3], i2133[4], 0, i2132, 'removeAdsButton')
  request.r(i2133[5], i2133[6], 0, i2132, 'pauseButton')
  request.r(i2133[7], i2133[8], 0, i2132, 'Fade_Img')
  request.r(i2133[9], i2133[10], 0, i2132, 'TopBarAnim')
  request.r(i2133[11], i2133[12], 0, i2132, 'MainPanel')
  request.r(i2133[13], i2133[14], 0, i2132, 'PausePanel')
  request.r(i2133[15], i2133[16], 0, i2132, 'PausePopUp')
  request.r(i2133[17], i2133[18], 0, i2132, 'PauseCanvasGroup')
  request.r(i2133[19], i2133[20], 0, i2132, 'RateUsPanel')
  request.r(i2133[21], i2133[22], 0, i2132, 'RateUsPopUp')
  request.r(i2133[23], i2133[24], 0, i2132, 'RemoveAdsPanel')
  request.r(i2133[25], i2133[26], 0, i2132, 'RemoveAdsPopUp')
  request.r(i2133[27], i2133[28], 0, i2132, 'RemoveAdsCanvasGroup')
  var i2135 = i2133[29]
  var i2134 = []
  for(var i = 0; i < i2135.length; i += 2) {
  request.r(i2135[i + 0], i2135[i + 1], 2, i2134, '')
  }
  i2132.RemoveAdsAnims = i2134
  request.r(i2133[30], i2133[31], 0, i2132, 'CompletePanel')
  request.r(i2133[32], i2133[33], 0, i2132, 'LevelIcon')
  request.r(i2133[34], i2133[35], 0, i2132, 'CompleteParticles')
  request.r(i2133[36], i2133[37], 0, i2132, 'progressBar')
  request.r(i2133[38], i2133[39], 0, i2132, 'progressText')
  request.r(i2133[40], i2133[41], 0, i2132, 'toolIcon1')
  request.r(i2133[42], i2133[43], 0, i2132, 'toolIcon2')
  request.r(i2133[44], i2133[45], 0, i2132, 'toolIcon3')
  request.r(i2133[46], i2133[47], 0, i2132, 'toolIcon4')
  request.r(i2133[48], i2133[49], 0, i2132, 'target1')
  request.r(i2133[50], i2133[51], 0, i2132, 'target2')
  i2132.toolMoveDuration = i2133[52]
  i2132.currentIndex = i2133[53]
  var i2137 = i2133[54]
  var i2136 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2137.length; i += 2) {
  request.r(i2137[i + 0], i2137[i + 1], 1, i2136, '')
  }
  i2132.allTools = i2136
  request.r(i2133[55], i2133[56], 0, i2132, 'clockProgress')
  request.r(i2133[57], i2133[58], 0, i2132, 'clockProgressFill')
  request.r(i2133[59], i2133[60], 0, i2132, 'clockAudio')
  i2132.moveDistance = i2133[61]
  i2132.animationDuration = i2133[62]
  i2132.greyBgChildName = i2133[63]
  i2132.pushOffset = i2133[64]
  return i2132
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i2140 = root || request.c( 'GameManagerPlayable' )
  var i2141 = data
  request.r(i2141[0], i2141[1], 0, i2140, 'endParticles')
  request.r(i2141[2], i2141[3], 0, i2140, 'stepCompleteParticles')
  request.r(i2141[4], i2141[5], 0, i2140, 'DefaultMat')
  request.r(i2141[6], i2141[7], 0, i2140, 'BG_Music')
  request.r(i2141[8], i2141[9], 0, i2140, 'restoreEffectShader')
  request.r(i2141[10], i2141[11], 0, i2140, 'stickerEffectShader')
  i2140.isComplete = !!i2141[12]
  i2140.isPaused = !!i2141[13]
  request.r(i2141[14], i2141[15], 0, i2140, 'currentLevel')
  i2140.startLevelOnPlay = !!i2141[16]
  i2140.currentLevelNo = i2141[17]
  return i2140
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2142 = root || request.c( 'AudioController' )
  var i2143 = data
  request.r(i2143[0], i2143[1], 0, i2142, 'MainMixer')
  request.r(i2143[2], i2143[3], 0, i2142, 'UiClick')
  request.r(i2143[4], i2143[5], 0, i2142, 'UiClickSource')
  var i2145 = i2143[6]
  var i2144 = []
  for(var i = 0; i < i2145.length; i += 2) {
  request.r(i2145[i + 0], i2145[i + 1], 2, i2144, '')
  }
  i2142.SfxSources = i2144
  var i2147 = i2143[7]
  var i2146 = []
  for(var i = 0; i < i2147.length; i += 2) {
  request.r(i2147[i + 0], i2147[i + 1], 2, i2146, '')
  }
  i2142.AllClips = i2146
  return i2142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2151 = data
  i2150.pivot = new pc.Vec2( i2151[0], i2151[1] )
  i2150.anchorMin = new pc.Vec2( i2151[2], i2151[3] )
  i2150.anchorMax = new pc.Vec2( i2151[4], i2151[5] )
  i2150.sizeDelta = new pc.Vec2( i2151[6], i2151[7] )
  i2150.anchoredPosition3D = new pc.Vec3( i2151[8], i2151[9], i2151[10] )
  i2150.rotation = new pc.Quat(i2151[11], i2151[12], i2151[13], i2151[14])
  i2150.scale = new pc.Vec3( i2151[15], i2151[16], i2151[17] )
  return i2150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2153 = data
  i2152.planeDistance = i2153[0]
  i2152.referencePixelsPerUnit = i2153[1]
  i2152.isFallbackOverlay = !!i2153[2]
  i2152.renderMode = i2153[3]
  i2152.renderOrder = i2153[4]
  i2152.sortingLayerName = i2153[5]
  i2152.sortingOrder = i2153[6]
  i2152.scaleFactor = i2153[7]
  request.r(i2153[8], i2153[9], 0, i2152, 'worldCamera')
  i2152.overrideSorting = !!i2153[10]
  i2152.pixelPerfect = !!i2153[11]
  i2152.targetDisplay = i2153[12]
  i2152.overridePixelPerfect = !!i2153[13]
  i2152.enabled = !!i2153[14]
  return i2152
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2154 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2155 = data
  i2154.m_UiScaleMode = i2155[0]
  i2154.m_ReferencePixelsPerUnit = i2155[1]
  i2154.m_ScaleFactor = i2155[2]
  i2154.m_ReferenceResolution = new pc.Vec2( i2155[3], i2155[4] )
  i2154.m_ScreenMatchMode = i2155[5]
  i2154.m_MatchWidthOrHeight = i2155[6]
  i2154.m_PhysicalUnit = i2155[7]
  i2154.m_FallbackScreenDPI = i2155[8]
  i2154.m_DefaultSpriteDPI = i2155[9]
  i2154.m_DynamicPixelsPerUnit = i2155[10]
  i2154.m_PresetInfoIsWorld = !!i2155[11]
  return i2154
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2156 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2157 = data
  i2156.m_IgnoreReversedGraphics = !!i2157[0]
  i2156.m_BlockingObjects = i2157[1]
  i2156.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2157[2] )
  return i2156
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2158 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2159 = data
  i2158.targetIsSelf = !!i2159[0]
  request.r(i2159[1], i2159[2], 0, i2158, 'targetGO')
  i2158.tweenTargetIsTargetGO = !!i2159[3]
  i2158.delay = i2159[4]
  i2158.duration = i2159[5]
  i2158.easeType = i2159[6]
  i2158.easeCurve = new pc.AnimationCurve( { keys_flow: i2159[7] } )
  i2158.loopType = i2159[8]
  i2158.loops = i2159[9]
  i2158.id = i2159[10]
  i2158.isRelative = !!i2159[11]
  i2158.isFrom = !!i2159[12]
  i2158.isIndependentUpdate = !!i2159[13]
  i2158.autoKill = !!i2159[14]
  i2158.autoGenerate = !!i2159[15]
  i2158.isActive = !!i2159[16]
  i2158.isValid = !!i2159[17]
  request.r(i2159[18], i2159[19], 0, i2158, 'target')
  i2158.animationType = i2159[20]
  i2158.targetType = i2159[21]
  i2158.forcedTargetType = i2159[22]
  i2158.autoPlay = !!i2159[23]
  i2158.useTargetAsV3 = !!i2159[24]
  i2158.endValueFloat = i2159[25]
  i2158.endValueV3 = new pc.Vec3( i2159[26], i2159[27], i2159[28] )
  i2158.endValueV2 = new pc.Vec2( i2159[29], i2159[30] )
  i2158.endValueColor = new pc.Color(i2159[31], i2159[32], i2159[33], i2159[34])
  i2158.endValueString = i2159[35]
  i2158.endValueRect = UnityEngine.Rect.MinMaxRect(i2159[36], i2159[37], i2159[38], i2159[39])
  request.r(i2159[40], i2159[41], 0, i2158, 'endValueTransform')
  i2158.optionalBool0 = !!i2159[42]
  i2158.optionalBool1 = !!i2159[43]
  i2158.optionalFloat0 = i2159[44]
  i2158.optionalInt0 = i2159[45]
  i2158.optionalRotationMode = i2159[46]
  i2158.optionalScrambleMode = i2159[47]
  i2158.optionalShakeRandomnessMode = i2159[48]
  i2158.optionalString = i2159[49]
  i2158.updateType = i2159[50]
  i2158.isSpeedBased = !!i2159[51]
  i2158.hasOnStart = !!i2159[52]
  i2158.hasOnPlay = !!i2159[53]
  i2158.hasOnUpdate = !!i2159[54]
  i2158.hasOnStepComplete = !!i2159[55]
  i2158.hasOnComplete = !!i2159[56]
  i2158.hasOnTweenCreated = !!i2159[57]
  i2158.hasOnRewind = !!i2159[58]
  i2158.onStart = request.d('UnityEngine.Events.UnityEvent', i2159[59], i2158.onStart)
  i2158.onPlay = request.d('UnityEngine.Events.UnityEvent', i2159[60], i2158.onPlay)
  i2158.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2159[61], i2158.onUpdate)
  i2158.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2159[62], i2158.onStepComplete)
  i2158.onComplete = request.d('UnityEngine.Events.UnityEvent', i2159[63], i2158.onComplete)
  i2158.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2159[64], i2158.onTweenCreated)
  i2158.onRewind = request.d('UnityEngine.Events.UnityEvent', i2159[65], i2158.onRewind)
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2161 = data
  i2160.cullTransparentMesh = !!i2161[0]
  return i2160
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2162 = root || request.c( 'UnityEngine.UI.Image' )
  var i2163 = data
  request.r(i2163[0], i2163[1], 0, i2162, 'm_Sprite')
  i2162.m_Type = i2163[2]
  i2162.m_PreserveAspect = !!i2163[3]
  i2162.m_FillCenter = !!i2163[4]
  i2162.m_FillMethod = i2163[5]
  i2162.m_FillAmount = i2163[6]
  i2162.m_FillClockwise = !!i2163[7]
  i2162.m_FillOrigin = i2163[8]
  i2162.m_UseSpriteMesh = !!i2163[9]
  i2162.m_PixelsPerUnitMultiplier = i2163[10]
  request.r(i2163[11], i2163[12], 0, i2162, 'm_Material')
  i2162.m_Maskable = !!i2163[13]
  i2162.m_Color = new pc.Color(i2163[14], i2163[15], i2163[16], i2163[17])
  i2162.m_RaycastTarget = !!i2163[18]
  i2162.m_RaycastPadding = new pc.Vec4( i2163[19], i2163[20], i2163[21], i2163[22] )
  return i2162
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2164 = root || request.c( 'UnityEngine.UI.Text' )
  var i2165 = data
  i2164.m_FontData = request.d('UnityEngine.UI.FontData', i2165[0], i2164.m_FontData)
  i2164.m_Text = i2165[1]
  request.r(i2165[2], i2165[3], 0, i2164, 'm_Material')
  i2164.m_Maskable = !!i2165[4]
  i2164.m_Color = new pc.Color(i2165[5], i2165[6], i2165[7], i2165[8])
  i2164.m_RaycastTarget = !!i2165[9]
  i2164.m_RaycastPadding = new pc.Vec4( i2165[10], i2165[11], i2165[12], i2165[13] )
  return i2164
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2166 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2167 = data
  request.r(i2167[0], i2167[1], 0, i2166, 'm_Font')
  i2166.m_FontSize = i2167[2]
  i2166.m_FontStyle = i2167[3]
  i2166.m_BestFit = !!i2167[4]
  i2166.m_MinSize = i2167[5]
  i2166.m_MaxSize = i2167[6]
  i2166.m_Alignment = i2167[7]
  i2166.m_AlignByGeometry = !!i2167[8]
  i2166.m_RichText = !!i2167[9]
  i2166.m_HorizontalOverflow = i2167[10]
  i2166.m_VerticalOverflow = i2167[11]
  i2166.m_LineSpacing = i2167[12]
  return i2166
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2168 = root || request.c( 'UnityEngine.UI.Button' )
  var i2169 = data
  i2168.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2169[0], i2168.m_OnClick)
  i2168.m_Navigation = request.d('UnityEngine.UI.Navigation', i2169[1], i2168.m_Navigation)
  i2168.m_Transition = i2169[2]
  i2168.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2169[3], i2168.m_Colors)
  i2168.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2169[4], i2168.m_SpriteState)
  i2168.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2169[5], i2168.m_AnimationTriggers)
  i2168.m_Interactable = !!i2169[6]
  request.r(i2169[7], i2169[8], 0, i2168, 'm_TargetGraphic')
  return i2168
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2170 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2171 = data
  i2170.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2171[0], i2170.m_PersistentCalls)
  return i2170
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2172 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2173 = data
  i2172.m_Mode = i2173[0]
  i2172.m_WrapAround = !!i2173[1]
  request.r(i2173[2], i2173[3], 0, i2172, 'm_SelectOnUp')
  request.r(i2173[4], i2173[5], 0, i2172, 'm_SelectOnDown')
  request.r(i2173[6], i2173[7], 0, i2172, 'm_SelectOnLeft')
  request.r(i2173[8], i2173[9], 0, i2172, 'm_SelectOnRight')
  return i2172
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2174 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2175 = data
  i2174.m_NormalColor = new pc.Color(i2175[0], i2175[1], i2175[2], i2175[3])
  i2174.m_HighlightedColor = new pc.Color(i2175[4], i2175[5], i2175[6], i2175[7])
  i2174.m_PressedColor = new pc.Color(i2175[8], i2175[9], i2175[10], i2175[11])
  i2174.m_SelectedColor = new pc.Color(i2175[12], i2175[13], i2175[14], i2175[15])
  i2174.m_DisabledColor = new pc.Color(i2175[16], i2175[17], i2175[18], i2175[19])
  i2174.m_ColorMultiplier = i2175[20]
  i2174.m_FadeDuration = i2175[21]
  return i2174
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2176 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2177 = data
  request.r(i2177[0], i2177[1], 0, i2176, 'm_HighlightedSprite')
  request.r(i2177[2], i2177[3], 0, i2176, 'm_PressedSprite')
  request.r(i2177[4], i2177[5], 0, i2176, 'm_SelectedSprite')
  request.r(i2177[6], i2177[7], 0, i2176, 'm_DisabledSprite')
  return i2176
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2178 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2179 = data
  i2178.m_NormalTrigger = i2179[0]
  i2178.m_HighlightedTrigger = i2179[1]
  i2178.m_PressedTrigger = i2179[2]
  i2178.m_SelectedTrigger = i2179[3]
  i2178.m_DisabledTrigger = i2179[4]
  return i2178
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i2180 = root || request.c( 'PlayableHudRuntime' )
  var i2181 = data
  return i2180
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2182 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2183 = data
  request.r(i2183[0], i2183[1], 0, i2182, 'm_FirstSelected')
  i2182.m_sendNavigationEvents = !!i2183[2]
  i2182.m_DragThreshold = i2183[3]
  return i2182
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2184 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2185 = data
  i2184.m_HorizontalAxis = i2185[0]
  i2184.m_VerticalAxis = i2185[1]
  i2184.m_SubmitButton = i2185[2]
  i2184.m_CancelButton = i2185[3]
  i2184.m_InputActionsPerSecond = i2185[4]
  i2184.m_RepeatDelay = i2185[5]
  i2184.m_ForceModuleActive = !!i2185[6]
  i2184.m_SendPointerHoverToParent = !!i2185[7]
  return i2184
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i2186 = root || request.c( 'PlayableRouter' )
  var i2187 = data
  var i2189 = i2187[0]
  var i2188 = []
  for(var i = 0; i < i2189.length; i += 2) {
  request.r(i2189[i + 0], i2189[i + 1], 2, i2188, '')
  }
  i2186.menuObjects = i2188
  var i2191 = i2187[1]
  var i2190 = []
  for(var i = 0; i < i2191.length; i += 2) {
  request.r(i2191[i + 0], i2191[i + 1], 2, i2190, '')
  }
  i2186.gameplayObjects = i2190
  var i2193 = i2187[2]
  var i2192 = []
  for(var i = 0; i < i2193.length; i += 1) {
    i2192.push( request.d('PlayableRouter+SubLevelSlot', i2193[i + 0]) );
  }
  i2186.subLevels = i2192
  i2186.fadeDuration = i2187[3]
  i2186.onMenuClosing = request.d('UnityEngine.Events.UnityEvent', i2187[4], i2186.onMenuClosing)
  i2186.lockedMessage = i2187[5]
  i2186.lockedTapsToCTA = i2187[6]
  return i2186
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i2196 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i2197 = data
  request.r(i2197[0], i2197[1], 0, i2196, 'button')
  request.r(i2197[2], i2197[3], 0, i2196, 'level')
  return i2196
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i2198 = root || request.c( 'ToastManager' )
  var i2199 = data
  request.r(i2199[0], i2199[1], 0, i2198, 'toastPanel')
  request.r(i2199[2], i2199[3], 0, i2198, 'toastPopup')
  request.r(i2199[4], i2199[5], 0, i2198, 'canvasGroup')
  request.r(i2199[6], i2199[7], 0, i2198, 'toastText')
  i2198.startY = i2199[8]
  i2198.visibleY = i2199[9]
  i2198.endY = i2199[10]
  i2198.animationTime = i2199[11]
  i2198.animationTimeUp = i2199[12]
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2201 = data
  i2200.m_Alpha = i2201[0]
  i2200.m_Interactable = !!i2201[1]
  i2200.m_BlocksRaycasts = !!i2201[2]
  i2200.m_IgnoreParentGroups = !!i2201[3]
  i2200.enabled = !!i2201[4]
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2203 = data
  i2202.ambientIntensity = i2203[0]
  i2202.reflectionIntensity = i2203[1]
  i2202.ambientMode = i2203[2]
  i2202.ambientLight = new pc.Color(i2203[3], i2203[4], i2203[5], i2203[6])
  i2202.ambientSkyColor = new pc.Color(i2203[7], i2203[8], i2203[9], i2203[10])
  i2202.ambientGroundColor = new pc.Color(i2203[11], i2203[12], i2203[13], i2203[14])
  i2202.ambientEquatorColor = new pc.Color(i2203[15], i2203[16], i2203[17], i2203[18])
  i2202.fogColor = new pc.Color(i2203[19], i2203[20], i2203[21], i2203[22])
  i2202.fogEndDistance = i2203[23]
  i2202.fogStartDistance = i2203[24]
  i2202.fogDensity = i2203[25]
  i2202.fog = !!i2203[26]
  request.r(i2203[27], i2203[28], 0, i2202, 'skybox')
  i2202.fogMode = i2203[29]
  var i2205 = i2203[30]
  var i2204 = []
  for(var i = 0; i < i2205.length; i += 1) {
    i2204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2205[i + 0]) );
  }
  i2202.lightmaps = i2204
  i2202.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2203[31], i2202.lightProbes)
  i2202.lightmapsMode = i2203[32]
  i2202.mixedBakeMode = i2203[33]
  i2202.environmentLightingMode = i2203[34]
  i2202.ambientProbe = new pc.SphericalHarmonicsL2(i2203[35])
  request.r(i2203[36], i2203[37], 0, i2202, 'customReflection')
  request.r(i2203[38], i2203[39], 0, i2202, 'defaultReflection')
  i2202.defaultReflectionMode = i2203[40]
  i2202.defaultReflectionResolution = i2203[41]
  i2202.sunLightObjectId = i2203[42]
  i2202.pixelLightCount = i2203[43]
  i2202.defaultReflectionHDR = !!i2203[44]
  i2202.hasLightDataAsset = !!i2203[45]
  i2202.hasManualGenerate = !!i2203[46]
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2209 = data
  request.r(i2209[0], i2209[1], 0, i2208, 'lightmapColor')
  request.r(i2209[2], i2209[3], 0, i2208, 'lightmapDirection')
  request.r(i2209[4], i2209[5], 0, i2208, 'shadowMask')
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2210 = root || new UnityEngine.LightProbes()
  var i2211 = data
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2219 = data
  var i2221 = i2219[0]
  var i2220 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2221.length; i += 1) {
    i2220.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2221[i + 0]));
  }
  i2218.ShaderCompilationErrors = i2220
  i2218.name = i2219[1]
  i2218.guid = i2219[2]
  var i2223 = i2219[3]
  var i2222 = []
  for(var i = 0; i < i2223.length; i += 1) {
    i2222.push( i2223[i + 0] );
  }
  i2218.shaderDefinedKeywords = i2222
  var i2225 = i2219[4]
  var i2224 = []
  for(var i = 0; i < i2225.length; i += 1) {
    i2224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2225[i + 0]) );
  }
  i2218.passes = i2224
  var i2227 = i2219[5]
  var i2226 = []
  for(var i = 0; i < i2227.length; i += 1) {
    i2226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2227[i + 0]) );
  }
  i2218.usePasses = i2226
  var i2229 = i2219[6]
  var i2228 = []
  for(var i = 0; i < i2229.length; i += 1) {
    i2228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2229[i + 0]) );
  }
  i2218.defaultParameterValues = i2228
  request.r(i2219[7], i2219[8], 0, i2218, 'unityFallbackShader')
  i2218.readDepth = !!i2219[9]
  i2218.hasDepthOnlyPass = !!i2219[10]
  i2218.isCreatedByShaderGraph = !!i2219[11]
  i2218.disableBatching = !!i2219[12]
  i2218.compiled = !!i2219[13]
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2233 = data
  i2232.shaderName = i2233[0]
  i2232.errorMessage = i2233[1]
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2238 = root || new pc.UnityShaderPass()
  var i2239 = data
  i2238.id = i2239[0]
  i2238.subShaderIndex = i2239[1]
  i2238.name = i2239[2]
  i2238.passType = i2239[3]
  i2238.grabPassTextureName = i2239[4]
  i2238.usePass = !!i2239[5]
  i2238.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2239[6], i2238.zTest)
  i2238.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2239[7], i2238.zWrite)
  i2238.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2239[8], i2238.culling)
  i2238.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2239[9], i2238.blending)
  i2238.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2239[10], i2238.alphaBlending)
  i2238.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2239[11], i2238.colorWriteMask)
  i2238.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2239[12], i2238.offsetUnits)
  i2238.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2239[13], i2238.offsetFactor)
  i2238.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2239[14], i2238.stencilRef)
  i2238.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2239[15], i2238.stencilReadMask)
  i2238.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2239[16], i2238.stencilWriteMask)
  i2238.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2239[17], i2238.stencilOp)
  i2238.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2239[18], i2238.stencilOpFront)
  i2238.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2239[19], i2238.stencilOpBack)
  var i2241 = i2239[20]
  var i2240 = []
  for(var i = 0; i < i2241.length; i += 1) {
    i2240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2241[i + 0]) );
  }
  i2238.tags = i2240
  var i2243 = i2239[21]
  var i2242 = []
  for(var i = 0; i < i2243.length; i += 1) {
    i2242.push( i2243[i + 0] );
  }
  i2238.passDefinedKeywords = i2242
  var i2245 = i2239[22]
  var i2244 = []
  for(var i = 0; i < i2245.length; i += 1) {
    i2244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2245[i + 0]) );
  }
  i2238.passDefinedKeywordGroups = i2244
  var i2247 = i2239[23]
  var i2246 = []
  for(var i = 0; i < i2247.length; i += 1) {
    i2246.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2247[i + 0]) );
  }
  i2238.variants = i2246
  var i2249 = i2239[24]
  var i2248 = []
  for(var i = 0; i < i2249.length; i += 1) {
    i2248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2249[i + 0]) );
  }
  i2238.excludedVariants = i2248
  i2238.hasDepthReader = !!i2239[25]
  return i2238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2251 = data
  i2250.val = i2251[0]
  i2250.name = i2251[1]
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2253 = data
  i2252.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2253[0], i2252.src)
  i2252.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2253[1], i2252.dst)
  i2252.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2253[2], i2252.op)
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2255 = data
  i2254.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2255[0], i2254.pass)
  i2254.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2255[1], i2254.fail)
  i2254.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2255[2], i2254.zFail)
  i2254.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2255[3], i2254.comp)
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2259 = data
  i2258.name = i2259[0]
  i2258.value = i2259[1]
  return i2258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2263 = data
  var i2265 = i2263[0]
  var i2264 = []
  for(var i = 0; i < i2265.length; i += 1) {
    i2264.push( i2265[i + 0] );
  }
  i2262.keywords = i2264
  i2262.hasDiscard = !!i2263[1]
  return i2262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2269 = data
  i2268.passId = i2269[0]
  i2268.subShaderIndex = i2269[1]
  var i2271 = i2269[2]
  var i2270 = []
  for(var i = 0; i < i2271.length; i += 1) {
    i2270.push( i2271[i + 0] );
  }
  i2268.keywords = i2270
  i2268.vertexProgram = i2269[3]
  i2268.fragmentProgram = i2269[4]
  i2268.exportedForWebGl2 = !!i2269[5]
  i2268.readDepth = !!i2269[6]
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2275 = data
  request.r(i2275[0], i2275[1], 0, i2274, 'shader')
  i2274.pass = i2275[2]
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2279 = data
  i2278.name = i2279[0]
  i2278.type = i2279[1]
  i2278.value = new pc.Vec4( i2279[2], i2279[3], i2279[4], i2279[5] )
  i2278.textureValue = i2279[6]
  i2278.shaderPropertyFlag = i2279[7]
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2281 = data
  i2280.name = i2281[0]
  request.r(i2281[1], i2281[2], 0, i2280, 'texture')
  i2280.aabb = i2281[3]
  i2280.vertices = i2281[4]
  i2280.triangles = i2281[5]
  i2280.textureRect = UnityEngine.Rect.MinMaxRect(i2281[6], i2281[7], i2281[8], i2281[9])
  i2280.packedRect = UnityEngine.Rect.MinMaxRect(i2281[10], i2281[11], i2281[12], i2281[13])
  i2280.border = new pc.Vec4( i2281[14], i2281[15], i2281[16], i2281[17] )
  i2280.transparency = i2281[18]
  i2280.bounds = i2281[19]
  i2280.pixelsPerUnit = i2281[20]
  i2280.textureWidth = i2281[21]
  i2280.textureHeight = i2281[22]
  i2280.nativeSize = new pc.Vec2( i2281[23], i2281[24] )
  i2280.pivot = new pc.Vec2( i2281[25], i2281[26] )
  i2280.textureRectOffset = new pc.Vec2( i2281[27], i2281[28] )
  return i2280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2283 = data
  i2282.name = i2283[0]
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2285 = data
  i2284.name = i2285[0]
  i2284.wrapMode = i2285[1]
  i2284.isLooping = !!i2285[2]
  i2284.length = i2285[3]
  var i2287 = i2285[4]
  var i2286 = []
  for(var i = 0; i < i2287.length; i += 1) {
    i2286.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2287[i + 0]) );
  }
  i2284.curves = i2286
  var i2289 = i2285[5]
  var i2288 = []
  for(var i = 0; i < i2289.length; i += 1) {
    i2288.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2289[i + 0]) );
  }
  i2284.events = i2288
  i2284.halfPrecision = !!i2285[6]
  i2284._frameRate = i2285[7]
  i2284.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2285[8], i2284.localBounds)
  i2284.hasMuscleCurves = !!i2285[9]
  var i2291 = i2285[10]
  var i2290 = []
  for(var i = 0; i < i2291.length; i += 1) {
    i2290.push( i2291[i + 0] );
  }
  i2284.clipMuscleConstant = i2290
  i2284.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2285[11], i2284.clipBindingConstant)
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2295 = data
  i2294.path = i2295[0]
  i2294.hash = i2295[1]
  i2294.componentType = i2295[2]
  i2294.property = i2295[3]
  i2294.keys = i2295[4]
  var i2297 = i2295[5]
  var i2296 = []
  for(var i = 0; i < i2297.length; i += 1) {
    i2296.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2297[i + 0]) );
  }
  i2294.objectReferenceKeys = i2296
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2301 = data
  i2300.time = i2301[0]
  request.r(i2301[1], i2301[2], 0, i2300, 'value')
  return i2300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2305 = data
  i2304.functionName = i2305[0]
  i2304.floatParameter = i2305[1]
  i2304.intParameter = i2305[2]
  i2304.stringParameter = i2305[3]
  request.r(i2305[4], i2305[5], 0, i2304, 'objectReferenceParameter')
  i2304.time = i2305[6]
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2307 = data
  i2306.center = new pc.Vec3( i2307[0], i2307[1], i2307[2] )
  i2306.extends = new pc.Vec3( i2307[3], i2307[4], i2307[5] )
  return i2306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2311 = data
  var i2313 = i2311[0]
  var i2312 = []
  for(var i = 0; i < i2313.length; i += 1) {
    i2312.push( i2313[i + 0] );
  }
  i2310.genericBindings = i2312
  var i2315 = i2311[1]
  var i2314 = []
  for(var i = 0; i < i2315.length; i += 1) {
    i2314.push( i2315[i + 0] );
  }
  i2310.pptrCurveMapping = i2314
  return i2310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2317 = data
  i2316.name = i2317[0]
  i2316.ascent = i2317[1]
  i2316.originalLineHeight = i2317[2]
  i2316.fontSize = i2317[3]
  var i2319 = i2317[4]
  var i2318 = []
  for(var i = 0; i < i2319.length; i += 1) {
    i2318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2319[i + 0]) );
  }
  i2316.characterInfo = i2318
  request.r(i2317[5], i2317[6], 0, i2316, 'texture')
  i2316.originalFontSize = i2317[7]
  return i2316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2323 = data
  i2322.index = i2323[0]
  i2322.advance = i2323[1]
  i2322.bearing = i2323[2]
  i2322.glyphWidth = i2323[3]
  i2322.glyphHeight = i2323[4]
  i2322.minX = i2323[5]
  i2322.maxX = i2323[6]
  i2322.minY = i2323[7]
  i2322.maxY = i2323[8]
  i2322.uvBottomLeftX = i2323[9]
  i2322.uvBottomLeftY = i2323[10]
  i2322.uvBottomRightX = i2323[11]
  i2322.uvBottomRightY = i2323[12]
  i2322.uvTopLeftX = i2323[13]
  i2322.uvTopLeftY = i2323[14]
  i2322.uvTopRightX = i2323[15]
  i2322.uvTopRightY = i2323[16]
  return i2322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2325 = data
  i2324.name = i2325[0]
  var i2327 = i2325[1]
  var i2326 = []
  for(var i = 0; i < i2327.length; i += 1) {
    i2326.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2327[i + 0]) );
  }
  i2324.layers = i2326
  var i2329 = i2325[2]
  var i2328 = []
  for(var i = 0; i < i2329.length; i += 1) {
    i2328.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2329[i + 0]) );
  }
  i2324.parameters = i2328
  i2324.animationClips = i2325[3]
  i2324.avatarUnsupported = i2325[4]
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2333 = data
  i2332.name = i2333[0]
  i2332.defaultWeight = i2333[1]
  i2332.blendingMode = i2333[2]
  i2332.avatarMask = i2333[3]
  i2332.syncedLayerIndex = i2333[4]
  i2332.syncedLayerAffectsTiming = !!i2333[5]
  i2332.syncedLayers = i2333[6]
  i2332.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2333[7], i2332.stateMachine)
  return i2332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2335 = data
  i2334.id = i2335[0]
  i2334.name = i2335[1]
  i2334.path = i2335[2]
  var i2337 = i2335[3]
  var i2336 = []
  for(var i = 0; i < i2337.length; i += 1) {
    i2336.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2337[i + 0]) );
  }
  i2334.states = i2336
  var i2339 = i2335[4]
  var i2338 = []
  for(var i = 0; i < i2339.length; i += 1) {
    i2338.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2339[i + 0]) );
  }
  i2334.machines = i2338
  var i2341 = i2335[5]
  var i2340 = []
  for(var i = 0; i < i2341.length; i += 1) {
    i2340.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2341[i + 0]) );
  }
  i2334.entryStateTransitions = i2340
  var i2343 = i2335[6]
  var i2342 = []
  for(var i = 0; i < i2343.length; i += 1) {
    i2342.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2343[i + 0]) );
  }
  i2334.exitStateTransitions = i2342
  var i2345 = i2335[7]
  var i2344 = []
  for(var i = 0; i < i2345.length; i += 1) {
    i2344.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2345[i + 0]) );
  }
  i2334.anyStateTransitions = i2344
  i2334.defaultStateId = i2335[8]
  return i2334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2349 = data
  i2348.id = i2349[0]
  i2348.name = i2349[1]
  i2348.cycleOffset = i2349[2]
  i2348.cycleOffsetParameter = i2349[3]
  i2348.cycleOffsetParameterActive = !!i2349[4]
  i2348.mirror = !!i2349[5]
  i2348.mirrorParameter = i2349[6]
  i2348.mirrorParameterActive = !!i2349[7]
  i2348.motionId = i2349[8]
  i2348.nameHash = i2349[9]
  i2348.fullPathHash = i2349[10]
  i2348.speed = i2349[11]
  i2348.speedParameter = i2349[12]
  i2348.speedParameterActive = !!i2349[13]
  i2348.tag = i2349[14]
  i2348.tagHash = i2349[15]
  i2348.writeDefaultValues = !!i2349[16]
  var i2351 = i2349[17]
  var i2350 = []
  for(var i = 0; i < i2351.length; i += 2) {
  request.r(i2351[i + 0], i2351[i + 1], 2, i2350, '')
  }
  i2348.behaviours = i2350
  var i2353 = i2349[18]
  var i2352 = []
  for(var i = 0; i < i2353.length; i += 1) {
    i2352.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2353[i + 0]) );
  }
  i2348.transitions = i2352
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2359 = data
  i2358.fullPath = i2359[0]
  i2358.canTransitionToSelf = !!i2359[1]
  i2358.duration = i2359[2]
  i2358.exitTime = i2359[3]
  i2358.hasExitTime = !!i2359[4]
  i2358.hasFixedDuration = !!i2359[5]
  i2358.interruptionSource = i2359[6]
  i2358.offset = i2359[7]
  i2358.orderedInterruption = !!i2359[8]
  i2358.destinationStateId = i2359[9]
  i2358.isExit = !!i2359[10]
  i2358.mute = !!i2359[11]
  i2358.solo = !!i2359[12]
  var i2361 = i2359[13]
  var i2360 = []
  for(var i = 0; i < i2361.length; i += 1) {
    i2360.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2361[i + 0]) );
  }
  i2358.conditions = i2360
  return i2358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2367 = data
  i2366.destinationStateId = i2367[0]
  i2366.isExit = !!i2367[1]
  i2366.mute = !!i2367[2]
  i2366.solo = !!i2367[3]
  var i2369 = i2367[4]
  var i2368 = []
  for(var i = 0; i < i2369.length; i += 1) {
    i2368.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2369[i + 0]) );
  }
  i2366.conditions = i2368
  return i2366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2373 = data
  i2372.mode = i2373[0]
  i2372.parameter = i2373[1]
  i2372.threshold = i2373[2]
  return i2372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2377 = data
  i2376.defaultBool = !!i2377[0]
  i2376.defaultFloat = i2377[1]
  i2376.defaultInt = i2377[2]
  i2376.name = i2377[3]
  i2376.nameHash = i2377[4]
  i2376.type = i2377[5]
  return i2376
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2378 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2379 = data
  i2378.useSafeMode = !!i2379[0]
  i2378.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2379[1], i2378.safeModeOptions)
  i2378.timeScale = i2379[2]
  i2378.unscaledTimeScale = i2379[3]
  i2378.useSmoothDeltaTime = !!i2379[4]
  i2378.maxSmoothUnscaledTime = i2379[5]
  i2378.rewindCallbackMode = i2379[6]
  i2378.showUnityEditorReport = !!i2379[7]
  i2378.logBehaviour = i2379[8]
  i2378.drawGizmos = !!i2379[9]
  i2378.defaultRecyclable = !!i2379[10]
  i2378.defaultAutoPlay = i2379[11]
  i2378.defaultUpdateType = i2379[12]
  i2378.defaultTimeScaleIndependent = !!i2379[13]
  i2378.defaultEaseType = i2379[14]
  i2378.defaultEaseOvershootOrAmplitude = i2379[15]
  i2378.defaultEasePeriod = i2379[16]
  i2378.defaultAutoKill = !!i2379[17]
  i2378.defaultLoopType = i2379[18]
  i2378.debugMode = !!i2379[19]
  i2378.debugStoreTargetId = !!i2379[20]
  i2378.showPreviewPanel = !!i2379[21]
  i2378.storeSettingsLocation = i2379[22]
  i2378.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2379[23], i2378.modules)
  i2378.createASMDEF = !!i2379[24]
  i2378.showPlayingTweens = !!i2379[25]
  i2378.showPausedTweens = !!i2379[26]
  return i2378
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2380 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2381 = data
  i2380.logBehaviour = i2381[0]
  i2380.nestedTweenFailureBehaviour = i2381[1]
  return i2380
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2382 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2383 = data
  i2382.showPanel = !!i2383[0]
  i2382.audioEnabled = !!i2383[1]
  i2382.physicsEnabled = !!i2383[2]
  i2382.physics2DEnabled = !!i2383[3]
  i2382.spriteEnabled = !!i2383[4]
  i2382.uiEnabled = !!i2383[5]
  i2382.textMeshProEnabled = !!i2383[6]
  i2382.tk2DEnabled = !!i2383[7]
  i2382.deAudioEnabled = !!i2383[8]
  i2382.deUnityExtendedEnabled = !!i2383[9]
  i2382.epoOutlineEnabled = !!i2383[10]
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2385 = data
  var i2387 = i2385[0]
  var i2386 = []
  for(var i = 0; i < i2387.length; i += 1) {
    i2386.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2387[i + 0]) );
  }
  i2384.files = i2386
  i2384.componentToPrefabIds = i2385[1]
  return i2384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2391 = data
  i2390.path = i2391[0]
  request.r(i2391[1], i2391[2], 0, i2390, 'unityObject')
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2393 = data
  var i2395 = i2393[0]
  var i2394 = []
  for(var i = 0; i < i2395.length; i += 1) {
    i2394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2395[i + 0]) );
  }
  i2392.scriptsExecutionOrder = i2394
  var i2397 = i2393[1]
  var i2396 = []
  for(var i = 0; i < i2397.length; i += 1) {
    i2396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2397[i + 0]) );
  }
  i2392.sortingLayers = i2396
  var i2399 = i2393[2]
  var i2398 = []
  for(var i = 0; i < i2399.length; i += 1) {
    i2398.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2399[i + 0]) );
  }
  i2392.cullingLayers = i2398
  i2392.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2393[3], i2392.timeSettings)
  i2392.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2393[4], i2392.physicsSettings)
  i2392.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2393[5], i2392.physics2DSettings)
  i2392.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2393[6], i2392.qualitySettings)
  i2392.enableRealtimeShadows = !!i2393[7]
  i2392.enableAutoInstancing = !!i2393[8]
  i2392.enableStaticBatching = !!i2393[9]
  i2392.enableDynamicBatching = !!i2393[10]
  i2392.usePreservativeDynamicBatching = !!i2393[11]
  i2392.lightmapEncodingQuality = i2393[12]
  i2392.desiredColorSpace = i2393[13]
  var i2401 = i2393[14]
  var i2400 = []
  for(var i = 0; i < i2401.length; i += 1) {
    i2400.push( i2401[i + 0] );
  }
  i2392.allTags = i2400
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2405 = data
  i2404.name = i2405[0]
  i2404.value = i2405[1]
  return i2404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2409 = data
  i2408.id = i2409[0]
  i2408.name = i2409[1]
  i2408.value = i2409[2]
  return i2408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2413 = data
  i2412.id = i2413[0]
  i2412.name = i2413[1]
  return i2412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2415 = data
  i2414.fixedDeltaTime = i2415[0]
  i2414.maximumDeltaTime = i2415[1]
  i2414.timeScale = i2415[2]
  i2414.maximumParticleTimestep = i2415[3]
  return i2414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2417 = data
  i2416.gravity = new pc.Vec3( i2417[0], i2417[1], i2417[2] )
  i2416.defaultSolverIterations = i2417[3]
  i2416.bounceThreshold = i2417[4]
  i2416.autoSyncTransforms = !!i2417[5]
  i2416.autoSimulation = !!i2417[6]
  var i2419 = i2417[7]
  var i2418 = []
  for(var i = 0; i < i2419.length; i += 1) {
    i2418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2419[i + 0]) );
  }
  i2416.collisionMatrix = i2418
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2423 = data
  i2422.enabled = !!i2423[0]
  i2422.layerId = i2423[1]
  i2422.otherLayerId = i2423[2]
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2425 = data
  request.r(i2425[0], i2425[1], 0, i2424, 'material')
  i2424.gravity = new pc.Vec2( i2425[2], i2425[3] )
  i2424.positionIterations = i2425[4]
  i2424.velocityIterations = i2425[5]
  i2424.velocityThreshold = i2425[6]
  i2424.maxLinearCorrection = i2425[7]
  i2424.maxAngularCorrection = i2425[8]
  i2424.maxTranslationSpeed = i2425[9]
  i2424.maxRotationSpeed = i2425[10]
  i2424.baumgarteScale = i2425[11]
  i2424.baumgarteTOIScale = i2425[12]
  i2424.timeToSleep = i2425[13]
  i2424.linearSleepTolerance = i2425[14]
  i2424.angularSleepTolerance = i2425[15]
  i2424.defaultContactOffset = i2425[16]
  i2424.autoSimulation = !!i2425[17]
  i2424.queriesHitTriggers = !!i2425[18]
  i2424.queriesStartInColliders = !!i2425[19]
  i2424.callbacksOnDisable = !!i2425[20]
  i2424.reuseCollisionCallbacks = !!i2425[21]
  i2424.autoSyncTransforms = !!i2425[22]
  var i2427 = i2425[23]
  var i2426 = []
  for(var i = 0; i < i2427.length; i += 1) {
    i2426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2427[i + 0]) );
  }
  i2424.collisionMatrix = i2426
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2431 = data
  i2430.enabled = !!i2431[0]
  i2430.layerId = i2431[1]
  i2430.otherLayerId = i2431[2]
  return i2430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2433 = data
  var i2435 = i2433[0]
  var i2434 = []
  for(var i = 0; i < i2435.length; i += 1) {
    i2434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2435[i + 0]) );
  }
  i2432.qualityLevels = i2434
  var i2437 = i2433[1]
  var i2436 = []
  for(var i = 0; i < i2437.length; i += 1) {
    i2436.push( i2437[i + 0] );
  }
  i2432.names = i2436
  i2432.shadows = i2433[2]
  i2432.anisotropicFiltering = i2433[3]
  i2432.antiAliasing = i2433[4]
  i2432.lodBias = i2433[5]
  i2432.shadowCascades = i2433[6]
  i2432.shadowDistance = i2433[7]
  i2432.shadowmaskMode = i2433[8]
  i2432.shadowProjection = i2433[9]
  i2432.shadowResolution = i2433[10]
  i2432.softParticles = !!i2433[11]
  i2432.softVegetation = !!i2433[12]
  i2432.activeColorSpace = i2433[13]
  i2432.desiredColorSpace = i2433[14]
  i2432.masterTextureLimit = i2433[15]
  i2432.maxQueuedFrames = i2433[16]
  i2432.particleRaycastBudget = i2433[17]
  i2432.pixelLightCount = i2433[18]
  i2432.realtimeReflectionProbes = !!i2433[19]
  i2432.shadowCascade2Split = i2433[20]
  i2432.shadowCascade4Split = new pc.Vec3( i2433[21], i2433[22], i2433[23] )
  i2432.streamingMipmapsActive = !!i2433[24]
  i2432.vSyncCount = i2433[25]
  i2432.asyncUploadBufferSize = i2433[26]
  i2432.asyncUploadTimeSlice = i2433[27]
  i2432.billboardsFaceCameraPosition = !!i2433[28]
  i2432.shadowNearPlaneOffset = i2433[29]
  i2432.streamingMipmapsMemoryBudget = i2433[30]
  i2432.maximumLODLevel = i2433[31]
  i2432.streamingMipmapsAddAllCameras = !!i2433[32]
  i2432.streamingMipmapsMaxLevelReduction = i2433[33]
  i2432.streamingMipmapsRenderersPerFrame = i2433[34]
  i2432.resolutionScalingFixedDPIFactor = i2433[35]
  i2432.streamingMipmapsMaxFileIORequests = i2433[36]
  i2432.currentQualityLevel = i2433[37]
  return i2432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i2440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i2441 = data
  var i2443 = i2441[0]
  var i2442 = []
  for(var i = 0; i < i2443.length; i += 1) {
    i2442.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i2443[i + 0]) );
  }
  i2440.groups = i2442
  var i2445 = i2441[1]
  var i2444 = []
  for(var i = 0; i < i2445.length; i += 1) {
    i2444.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i2445[i + 0]) );
  }
  i2440.snapshots = i2444
  return i2440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i2448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i2449 = data
  i2448.id = i2449[0]
  i2448.childGroupIds = i2449[1]
  i2448.name = i2449[2]
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i2452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i2453 = data
  i2452.id = i2453[0]
  var i2455 = i2453[1]
  var i2454 = []
  for(var i = 0; i < i2455.length; i += 1) {
    i2454.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i2455[i + 0]) );
  }
  i2452.parameters = i2454
  return i2452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i2458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i2459 = data
  i2458.name = i2459[0]
  i2458.value = i2459[1]
  return i2458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2463 = data
  i2462.weight = i2463[0]
  i2462.vertices = i2463[1]
  i2462.normals = i2463[2]
  i2462.tangents = i2463[3]
  return i2462
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[77],"78":[42],"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[80],"87":[34],"88":[34],"89":[34],"90":[34],"91":[34],"92":[34],"93":[34],"94":[34],"95":[34],"96":[34],"97":[34],"98":[34],"99":[34],"100":[42],"101":[102],"103":[104],"105":[104],"54":[47],"106":[107],"108":[12],"109":[25],"110":[12],"111":[112],"113":[112],"114":[49],"115":[25],"116":[12],"117":[10],"23":[12],"118":[47],"119":[47],"57":[54],"48":[58,47],"120":[47],"56":[54],"121":[47],"122":[47],"123":[47],"124":[47],"125":[47],"126":[47],"127":[47],"128":[47],"129":[47],"130":[58,47],"131":[47],"132":[47],"133":[47],"134":[47],"50":[58,47],"135":[47],"136":[62],"137":[62],"63":[62],"138":[62],"139":[42],"140":[42]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","Level1_Shower_Playable","UnityEngine.GameObject","BasicDrag","BD_CameraFollow","UnityEngine.SpriteRenderer","UnityEngine.AudioClip","UnityEngine.Animator","UnityEngine.AudioSource","UnityEngine.Sprite","ScratchCardAsset.ScratchCardManager","PlayableCTA","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","UnityEditor.Animations.AnimatorController","BD_AnimationHelper","UnityEngine.U2D.Animation.SpriteSkin","UnityEditor.Audio.AudioMixerGroupController","UnityEngine.BoxCollider2D","JarFillNoMask","MatchTargetXPosition","UnityEngine.CircleCollider2D","PlaySfxOnCollision","PlayParticlesOnCollision","BD_Clamp","BD_ToolRotate","BD_Action","UnityEngine.Rigidbody2D","JarDropTrigger","BD_Audio","AcidPourController","BD_SpriteAnim","BD_Progress","BD_SpriteChange","DestroyObj","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","PlayableRouter","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","UnityEngine.LineRenderer","BD_Fold","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","SpriteButton","RadialCircleFill","TeaseTapCTA","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "25.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "14Sept2026_CompleteLvl1_5";

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

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1697";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3876";

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

Deserializers.buildID = "490c82bc-f6fa-4ead-841c-31215521f38c";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

