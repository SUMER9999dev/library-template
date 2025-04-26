import jest from "@rbxts/jest";

const reloadTSRuntime = script.Parent!.FindFirstChild("reload-ts-runtime")! as ModuleScript;
const options: jest.Config = {
	verbose: false,
	ci: false,
	setupFiles: [reloadTSRuntime],
};

export = options;
