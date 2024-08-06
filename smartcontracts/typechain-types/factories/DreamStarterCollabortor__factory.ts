/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DreamStarterCollabortor,
  DreamStarterCollabortorInterface,
} from "../DreamStarterCollabortor";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "a",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_a",
        type: "uint256",
      },
    ],
    name: "get",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000805534801561001457600080fd5b50600a60005560b1806100286000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80630dbe671f1460375780639507d39a146051575b600080fd5b603f60005481565b60405190815260200160405180910390f35b6061605c3660046063565b600055565b005b600060208284031215607457600080fd5b503591905056fea264697066735822122009985040a8bda8f5e9ddb6929fa8907973ddc703aa3d06ebcb6656c168359ea264736f6c63430008110033";

type DreamStarterCollabortorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DreamStarterCollabortorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DreamStarterCollabortor__factory extends ContractFactory {
  constructor(...args: DreamStarterCollabortorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "DreamStarterCollabortor";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DreamStarterCollabortor> {
    return super.deploy(overrides || {}) as Promise<DreamStarterCollabortor>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DreamStarterCollabortor {
    return super.attach(address) as DreamStarterCollabortor;
  }
  connect(signer: Signer): DreamStarterCollabortor__factory {
    return super.connect(signer) as DreamStarterCollabortor__factory;
  }
  static readonly contractName: "DreamStarterCollabortor";
  public readonly contractName: "DreamStarterCollabortor";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DreamStarterCollabortorInterface {
    return new utils.Interface(_abi) as DreamStarterCollabortorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DreamStarterCollabortor {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DreamStarterCollabortor;
  }
}